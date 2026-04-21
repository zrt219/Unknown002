import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Labels from './Labels'
import LeaderLines from './LeaderLines'
import OverlayLayer from './OverlayLayer'
import SceneEnvironment from './SceneEnvironment'
import SceneLighting from './SceneLighting'
import Spacecraft from './Spacecraft'
import {
  cameraControlTuning,
  cameraPresets,
  subsystems
} from '../../data/spacecraftConfig'

function CameraRig({
  activeCameraPreset,
  cameraMode,
  cameraPanEnabled,
  onCameraStateChange,
  selectedSubsystem
}) {
  const controlsRef = useRef(null)
  const isTransitioningRef = useRef(true)
  const isInteractingRef = useRef(false)
  const positionRef = useRef(new THREE.Vector3(...cameraPresets.heroTechnical.position))
  const targetRef = useRef(new THREE.Vector3(...cameraPresets.heroTechnical.target))
  const fovRef = useRef(cameraPresets.heroTechnical.fov ?? 35)
  const { camera } = useThree()

  useEffect(() => {
    const preset = cameraPresets[activeCameraPreset] ?? cameraPresets.heroTechnical
    positionRef.current.set(...preset.position)
    targetRef.current.set(...preset.target)
    fovRef.current = preset.fov ?? 35
    isTransitioningRef.current = true
  }, [activeCameraPreset])

  useEffect(() => {
    if (cameraMode !== 'focusLock') {
      return
    }

    const focusTarget =
      subsystems[selectedSubsystem]?.focusTarget ??
      cameraPresets[activeCameraPreset]?.target ??
      cameraPresets.heroTechnical.target

    targetRef.current.set(...focusTarget)
  }, [activeCameraPreset, cameraMode, selectedSubsystem])

  useEffect(() => {
    if (!controlsRef.current) {
      return undefined
    }

    const controls = controlsRef.current
    const handleStart = () => {
      isInteractingRef.current = true
      isTransitioningRef.current = false
    }
    const handleEnd = () => {
      isInteractingRef.current = false
    }

    controls.addEventListener('start', handleStart)
    controls.addEventListener('end', handleEnd)

    return () => {
      controls.removeEventListener('start', handleStart)
      controls.removeEventListener('end', handleEnd)
    }
  }, [])

  useFrame((_, delta) => {
    if (!controlsRef.current) {
      return
    }

    const controls = controlsRef.current
    const transitionDamp =
      1 - Math.exp(-delta * cameraControlTuning.transitionSharpness)
    const focusDamp =
      1 - Math.exp(-delta * cameraControlTuning.focusLockSharpness)

    if (isTransitioningRef.current) {
      camera.position.lerp(positionRef.current, transitionDamp)
      controls.target.lerp(targetRef.current, transitionDamp)
      camera.fov += (fovRef.current - camera.fov) * transitionDamp
      camera.updateProjectionMatrix()

      if (
        camera.position.distanceTo(positionRef.current) < 0.04 &&
        controls.target.distanceTo(targetRef.current) < 0.04 &&
        Math.abs(camera.fov - fovRef.current) < 0.04
      ) {
        camera.position.copy(positionRef.current)
        controls.target.copy(targetRef.current)
        camera.fov = fovRef.current
        camera.updateProjectionMatrix()
        isTransitioningRef.current = false
      }
    } else if (!isInteractingRef.current && cameraMode === 'focusLock') {
      controls.target.lerp(targetRef.current, focusDamp)
    }

    onCameraStateChange?.({
      position: camera.position.toArray(),
      target: controls.target.toArray(),
      fov: camera.fov
    })
    controls.update()
  })

  const effectivePanEnabled =
    cameraPanEnabled && !(cameraPresets[activeCameraPreset]?.lockPan ?? false)

  return (
    <OrbitControls
      dampingFactor={cameraControlTuning.dampingFactor}
      enableDamping
      enablePan={effectivePanEnabled}
      enableZoom
      makeDefault
      maxDistance={cameraControlTuning.maxDistance}
      maxPolarAngle={cameraControlTuning.maxPolarAngle}
      minDistance={cameraControlTuning.minDistance}
      minPolarAngle={cameraControlTuning.minPolarAngle}
      panSpeed={cameraControlTuning.panSpeed}
      ref={controlsRef}
      rotateSpeed={cameraControlTuning.rotateSpeed}
      zoomSpeed={cameraControlTuning.zoomSpeed}
    />
  )
}

function SceneContent({
  animationPresentation,
  annotationPresentation,
  environmentProfile,
  onSelectSubsystem,
  presentationMode,
  sceneMode,
  viewerState
}) {
  return (
    <>
      <SceneEnvironment
        captureSafeBackground={viewerState.captureSafeBackground}
        environmentProfile={environmentProfile}
        presentationMode={presentationMode}
        sceneMode={sceneMode}
      />
      <SceneLighting
        captureSafeBackground={viewerState.captureSafeBackground}
        environmentProfile={environmentProfile}
        presentationMode={presentationMode}
        sceneMode={sceneMode}
      />

      {(viewerState.showGrid || cameraPresets[viewerState.activeCameraPreset]?.showGrid) ? (
        <>
          <gridHelper args={[90, 18, '#334155', '#111827']} position={[4, -4.3, 0]} />
          <axesHelper args={[8]} position={[-28, -3.9, -8]} />
        </>
      ) : null}

      <Spacecraft
        animationPresentation={animationPresentation}
        onSelectSubsystem={onSelectSubsystem}
        sceneMode={sceneMode}
        viewerState={viewerState}
      />
      <OverlayLayer
        animationPresentation={animationPresentation}
        sceneMode={sceneMode}
        viewerState={viewerState}
      />
      <LeaderLines
        presentation={annotationPresentation}
        selectedSubsystem={viewerState.selectedSubsystem}
      />
      <Labels
        presentation={annotationPresentation}
        selectedSubsystem={viewerState.selectedSubsystem}
      />
      <CameraRig
        activeCameraPreset={viewerState.activeCameraPreset}
        cameraMode={viewerState.cameraMode}
        cameraPanEnabled={viewerState.cameraPanEnabled}
        onCameraStateChange={viewerState.onCameraStateChange}
        selectedSubsystem={viewerState.selectedSubsystem}
      />
    </>
  )
}

export default function SceneRoot({
  animationPresentation,
  annotationPresentation,
  environmentProfile,
  onCameraStateChange,
  onSelectSubsystem,
  presentationMode,
  sceneMode,
  viewerState
}) {
  if (import.meta.env.VITEST) {
    return <div aria-hidden="true" className="scene-test-double" />
  }

  return (
    <div className="scene-root">
      <Canvas
        camera={{
          fov: cameraPresets.heroTechnical.fov,
          position: cameraPresets.heroTechnical.position,
          near: 0.1,
          far: 420
        }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
        onPointerMissed={() => onSelectSubsystem(null)}
        shadows
      >
        <SceneContent
          animationPresentation={animationPresentation}
          annotationPresentation={annotationPresentation}
          environmentProfile={environmentProfile}
          onSelectSubsystem={onSelectSubsystem}
          presentationMode={presentationMode}
          sceneMode={sceneMode}
          viewerState={{
            ...viewerState,
            onCameraStateChange
          }}
        />
      </Canvas>
    </div>
  )
}
