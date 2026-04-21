import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

const lightingPresets = {
  clean: {
    ambient: 0.16,
    hemisphere: 0.18,
    key: 2.45,
    fill: 0.22,
    rim: 0.28,
    exposure: 1.16
  },
  engineering: {
    ambient: 0.2,
    hemisphere: 0.24,
    key: 2.15,
    fill: 0.26,
    rim: 0.2,
    exposure: 1.08
  },
  energy: {
    ambient: 0.12,
    hemisphere: 0.14,
    key: 1.74,
    fill: 0.18,
    rim: 0.15,
    exposure: 1.02
  },
  thermal: {
    ambient: 0.08,
    hemisphere: 0.1,
    key: 1.28,
    fill: 0.12,
    rim: 0.1,
    exposure: 0.94
  }
}

const environmentBoosts = {
  'deep-space': {
    ambientShift: 0,
    hemisphereShift: 0.02,
    keyMultiplier: 1,
    fillBoost: 0.02,
    rimBoost: 0.04,
    exposureMultiplier: 1
  },
  'earth-orbit': {
    ambientShift: 0.02,
    hemisphereShift: 0.04,
    keyMultiplier: 1.08,
    fillBoost: 0.08,
    rimBoost: 0.06,
    exposureMultiplier: 1.05
  },
  'thermal-analysis': {
    ambientShift: -0.03,
    hemisphereShift: -0.04,
    keyMultiplier: 0.9,
    fillBoost: -0.02,
    rimBoost: -0.03,
    exposureMultiplier: 0.9
  }
}

export default function SceneLighting({
  captureSafeBackground = false,
  environmentProfile,
  sceneMode
}) {
  const preset = lightingPresets[sceneMode] ?? lightingPresets.clean
  const environmentBoost =
    environmentBoosts[environmentProfile?.key] ?? environmentBoosts['deep-space']
  const { gl } = useThree()

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure =
      preset.exposure *
      environmentBoost.exposureMultiplier *
      (captureSafeBackground ? 0.94 : 1)
  }, [captureSafeBackground, environmentBoost.exposureMultiplier, gl, preset.exposure])

  const keyPosition = environmentProfile?.sun?.lightPosition ?? [-30, 18, 12]
  const earthFillIntensity =
    environmentProfile?.earth?.visible && environmentProfile?.key === 'earth-orbit'
      ? 0.22
      : 0.08
  const backgroundMultiplier = captureSafeBackground ? 0.82 : 1

  return (
    <>
      <ambientLight intensity={(preset.ambient + environmentBoost.ambientShift) * backgroundMultiplier} />
      <hemisphereLight
        color="#d7e9ff"
        groundColor={sceneMode === 'thermal' ? '#090d14' : '#08111f'}
        intensity={(preset.hemisphere + environmentBoost.hemisphereShift) * backgroundMultiplier}
        position={[0, 18, 0]}
      />
      <directionalLight
        castShadow
        color="#fff5e4"
        intensity={preset.key * environmentBoost.keyMultiplier * (captureSafeBackground ? 0.92 : 1)}
        position={keyPosition}
        shadow-bias={-0.00012}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />
      <directionalLight
        color={sceneMode === 'thermal' ? '#ffb067' : '#89bfff'}
        intensity={Math.max(0.04, preset.fill + environmentBoost.fillBoost) * backgroundMultiplier}
        position={[16, -18, 26]}
      />
      <directionalLight
        color={sceneMode === 'clean' ? '#d8eeff' : '#8fb8dc'}
        intensity={Math.max(0.04, preset.rim + environmentBoost.rimBoost) * backgroundMultiplier}
        position={[18, 10, -28]}
      />
      <pointLight
        color="#93c8ff"
        distance={220}
        intensity={earthFillIntensity * (captureSafeBackground ? 0.55 : 1)}
        position={[22, -62, 34]}
      />
    </>
  )
}
