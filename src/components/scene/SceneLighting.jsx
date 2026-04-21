import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import {
  environmentLightAdjustments,
  perModeLightAdjustments,
  sunLightRig
} from '../../environments/sunLightRig.js'
import { getModePresentationProfile } from '../../modes/modePresentationProfiles'

export default function SceneLighting({
  captureSafeBackground = false,
  environmentProfile,
  sceneMode
}) {
  const preset = perModeLightAdjustments[sceneMode] ?? perModeLightAdjustments.clean
  const presentationProfile = getModePresentationProfile(sceneMode)
  const modeLighting = presentationProfile.sceneTone.lighting
  const environmentBoost =
    environmentLightAdjustments[environmentProfile?.key] ??
    environmentLightAdjustments['deep-space']
  const { gl } = useThree()

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure =
      preset.exposure *
      modeLighting.exposure *
      environmentBoost.exposureMultiplier *
      (captureSafeBackground ? 0.94 : 1)
  }, [captureSafeBackground, environmentBoost.exposureMultiplier, gl, modeLighting.exposure, preset.exposure])

  const keyPosition = environmentProfile?.sun?.lightPosition ?? sunLightRig.lightPosition
  const earthFillIntensity =
    environmentProfile?.key === 'earth-orbit'
      ? 0.22
      : 0.08
  const backgroundMultiplier = captureSafeBackground ? 0.82 : 1

  return (
    <>
      <ambientLight intensity={(preset.ambient + environmentBoost.ambientShift) * modeLighting.ambient * backgroundMultiplier} />
      <hemisphereLight
        color="#d7e9ff"
        groundColor={sceneMode === 'thermal' ? '#090d14' : '#08111f'}
        intensity={(preset.hemisphere + environmentBoost.hemisphereShift) * modeLighting.hemisphere * backgroundMultiplier}
        position={[0, 18, 0]}
      />
      <directionalLight
        castShadow
        color={sunLightRig.keyColor}
        intensity={preset.key * modeLighting.key * environmentBoost.keyMultiplier * (captureSafeBackground ? 0.92 : 1)}
        position={keyPosition}
        shadow-bias={-0.00012}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />
      <directionalLight
        color={sceneMode === 'thermal' ? sunLightRig.thermalFillColor : sunLightRig.fillColor}
        intensity={Math.max(0.04, preset.fill + environmentBoost.fillBoost) * modeLighting.fill * backgroundMultiplier}
        position={[16, -18, 26]}
      />
      <directionalLight
        color={sceneMode === 'clean' ? sunLightRig.rimColor : sunLightRig.thermalRimColor}
        intensity={Math.max(0.04, preset.rim + environmentBoost.rimBoost) * modeLighting.rim * backgroundMultiplier}
        position={[18, 10, -28]}
      />
      <pointLight
        color={sunLightRig.earthBounceColor}
        distance={220}
        intensity={earthFillIntensity * (captureSafeBackground ? 0.55 : 1)}
        position={[22, -62, 34]}
      />
    </>
  )
}
