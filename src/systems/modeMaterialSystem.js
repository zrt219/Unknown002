import * as THREE from 'three'
import { colors } from '../data/spacecraftConfig'

const colorCache = new Map()

function getColor(value) {
  if (!colorCache.has(value)) {
    colorCache.set(value, new THREE.Color(value))
  }

  return colorCache.get(value)
}

function cloneColor(color) {
  return new THREE.Color(color.r, color.g, color.b)
}

const materialProfiles = {
  clean: {
    globalTint: '#ffffff',
    globalMix: 0,
    emissiveMultiplier: 0.72,
    roughnessOffset: -0.02,
    metalnessOffset: 0.03,
    selectedBoost: 0.06,
    subsystemTints: {}
  },
  engineering: {
    globalTint: '#dce6f2',
    globalMix: 0.08,
    emissiveMultiplier: 0.65,
    roughnessOffset: 0.06,
    metalnessOffset: -0.02,
    selectedBoost: 0.08,
    subsystemTints: {
      radiators: { tint: colors.radiatorEdge, mix: 0.08 },
      shield: { tint: colors.shieldPrimary, mix: 0.08 }
    }
  },
  energy: {
    globalTint: '#2a3445',
    globalMix: 0.24,
    emissiveMultiplier: 0.78,
    roughnessOffset: 0.12,
    metalnessOffset: -0.08,
    selectedBoost: 0.1,
    subsystemTints: {
      reactor: { tint: colors.heatInput, mix: 0.28 },
      braytonPowerUnit: { tint: colors.workingFluidWarm, mix: 0.22 },
      radiators: { tint: colors.workingFluidCold, mix: 0.16 },
      pmad: { tint: colors.power, mix: 0.28 },
      electricThrusters: { tint: colors.plume, mix: 0.2 }
    }
  },
  thermal: {
    globalTint: '#192331',
    globalMix: 0.34,
    emissiveMultiplier: 0.7,
    roughnessOffset: 0.14,
    metalnessOffset: -0.1,
    selectedBoost: 0.12,
    subsystemTints: {
      reactor: { tint: colors.heatInput, mix: 0.62 },
      shield: { tint: colors.shieldPrimary, mix: 0.22 },
      braytonPowerUnit: { tint: colors.workingFluidWarm, mix: 0.46 },
      radiators: { tint: colors.workingFluidCold, mix: 0.58 },
      separationBoom: { tint: '#4d5968', mix: 0.2 },
      spacecraftBus: { tint: '#445062', mix: 0.18 },
      pmad: { tint: '#94a3b8', mix: 0.22 },
      propellantTanks: { tint: '#748091', mix: 0.16 },
      sciencePayload: { tint: '#5b6677', mix: 0.12 },
      electricThrusters: { tint: colors.plume, mix: 0.18 }
    }
  }
}

function getSubsystemId(object) {
  let current = object

  while (current) {
    if (current.userData?.subsystemId) {
      return current.userData.subsystemId
    }

    current = current.parent
  }

  return null
}

function applyProfile(material, profile, subsystemId, selectedSubsystem) {
  if (!material?.isMaterial) {
    return
  }

  if (!material.userData.unknown02Base) {
    material.userData.unknown02Base = {
      color: material.color ? cloneColor(material.color) : null,
      emissive: material.emissive ? cloneColor(material.emissive) : null,
      emissiveIntensity: material.emissiveIntensity ?? 0,
      roughness: material.roughness,
      metalness: material.metalness,
      opacity: material.opacity
    }
  }

  const base = material.userData.unknown02Base
  const tintedProfile = profile.subsystemTints[subsystemId] ?? {}
  const tintColor = getColor(tintedProfile.tint ?? profile.globalTint)
  const tintMix = tintedProfile.mix ?? profile.globalMix
  const selectionBoost =
    subsystemId && subsystemId === selectedSubsystem ? profile.selectedBoost : 0

  if (base.color && material.color) {
    material.color.copy(base.color).lerp(tintColor, Math.min(1, tintMix + selectionBoost))
  }

  if (base.emissive && material.emissive) {
    material.emissive.copy(base.emissive).lerp(tintColor, tintMix * 0.25 + selectionBoost * 0.2)
    material.emissiveIntensity =
      base.emissiveIntensity * profile.emissiveMultiplier + selectionBoost * 0.24
  }

  if (typeof base.roughness === 'number' && typeof material.roughness === 'number') {
    material.roughness = THREE.MathUtils.clamp(
      base.roughness + profile.roughnessOffset,
      0.05,
      1
    )
  }

  if (typeof base.metalness === 'number' && typeof material.metalness === 'number') {
    material.metalness = THREE.MathUtils.clamp(
      base.metalness + profile.metalnessOffset,
      0,
      1
    )
  }

  if (typeof base.opacity === 'number' && material.transparent) {
    material.opacity = base.opacity
  }

  material.needsUpdate = true
}

export function applyMaterialProfile(root, sceneMode, selectedSubsystem) {
  const profile = materialProfiles[sceneMode] ?? materialProfiles.clean

  root.traverse((object) => {
    if (!object.isMesh) {
      return
    }

    const subsystemId = getSubsystemId(object)

    if (Array.isArray(object.material)) {
      object.material.forEach((material) =>
        applyProfile(material, profile, subsystemId, selectedSubsystem)
      )
      return
    }

    applyProfile(object.material, profile, subsystemId, selectedSubsystem)
  })
}
