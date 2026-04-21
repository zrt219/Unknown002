import * as THREE from 'three'
import { colors } from '../data/spacecraftConfig'
import { getModePresentationProfile } from '../modes/modePresentationProfiles'

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
    emissiveMultiplier: 0.6,
    emissiveAdd: 0,
    roughnessOffset: -0.02,
    metalnessOffset: 0.03,
    selectedBoost: 0.06,
    subsystemTints: {}
  },
  engineering: {
    globalTint: '#c9d7e8',
    globalMix: 0.12,
    emissiveMultiplier: 0.65,
    emissiveAdd: 0.01,
    roughnessOffset: 0.06,
    metalnessOffset: -0.02,
    selectedBoost: 0.08,
    subsystemTints: {
      integratedStructure: { tint: colors.truss, mix: 0.18, emissiveAdd: 0.015 },
      radiators: { tint: colors.radiatorEdge, mix: 0.14 },
      shield: { tint: colors.shieldPrimary, mix: 0.16 },
      separationBoom: { tint: colors.truss, mix: 0.16 },
      pmad: { tint: colors.power, mix: 0.12 }
    }
  },
  energy: {
    globalTint: '#162033',
    globalMix: 0.46,
    emissiveMultiplier: 0.42,
    emissiveAdd: 0,
    roughnessOffset: 0.12,
    metalnessOffset: -0.08,
    selectedBoost: 0.1,
    subsystemTints: {
      reactor: { tint: colors.heatInput, mix: 0.56, emissiveAdd: 0.12 },
      braytonPowerUnit: { tint: colors.workingFluidWarm, mix: 0.48, emissiveAdd: 0.08 },
      radiators: { tint: colors.workingFluidCold, mix: 0.34, emissiveAdd: 0.04 },
      pmad: { tint: colors.power, mix: 0.58, emissiveAdd: 0.12 },
      spacecraftBus: { tint: colors.power, mix: 0.2, emissiveAdd: 0.025 },
      electricThrusters: { tint: colors.plume, mix: 0.38, emissiveAdd: 0.08 }
    }
  },
  thermal: {
    globalTint: '#0f1724',
    globalMix: 0.6,
    emissiveMultiplier: 0.34,
    emissiveAdd: 0,
    roughnessOffset: 0.14,
    metalnessOffset: -0.1,
    selectedBoost: 0.12,
    subsystemTints: {
      reactor: { tint: '#ffb347', mix: 0.82, emissiveAdd: 0.2 },
      shield: { tint: '#6f7f5a', mix: 0.36, emissiveAdd: 0.025 },
      braytonPowerUnit: { tint: colors.workingFluidWarm, mix: 0.7, emissiveAdd: 0.12 },
      radiators: { tint: '#73c8ff', mix: 0.82, emissiveAdd: 0.16 },
      separationBoom: { tint: '#354152', mix: 0.38 },
      integratedStructure: { tint: '#313b4b', mix: 0.42 },
      spacecraftBus: { tint: '#263242', mix: 0.32 },
      pmad: { tint: '#405065', mix: 0.36 },
      propellantTanks: { tint: '#3e4655', mix: 0.28 },
      sciencePayload: { tint: '#323d4d', mix: 0.26 },
      electricThrusters: { tint: '#416f85', mix: 0.28, emissiveAdd: 0.02 }
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
  const emissiveAdd = tintedProfile.emissiveAdd ?? profile.emissiveAdd ?? 0
  const selectionBoost =
    subsystemId && subsystemId === selectedSubsystem ? profile.selectedBoost : 0

  if (base.color && material.color) {
    material.color.copy(base.color).lerp(tintColor, Math.min(1, tintMix + selectionBoost))
  }

  if (base.emissive && material.emissive) {
    material.emissive.copy(base.emissive).lerp(tintColor, tintMix * 0.25 + selectionBoost * 0.2)
    material.emissiveIntensity =
      base.emissiveIntensity * profile.emissiveMultiplier +
      emissiveAdd +
      selectionBoost * 0.24
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
  const presentationProfile = getModePresentationProfile(sceneMode)
  const materialProfileName = presentationProfile.spacecraftTreatment.profile
  const profile = materialProfiles[materialProfileName] ?? materialProfiles.clean

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
