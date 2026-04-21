import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import AppShell from './components/layout/AppShell'
import SceneRoot from './components/scene/SceneRoot'
import BraytonInset from './components/ui/BraytonInset'
import CameraPresets from './components/ui/CameraPresets'
import CameraTools from './components/ui/CameraTools'
import CaptureStudio from './components/ui/CaptureStudio'
import InspectionModes from './components/ui/InspectionModes'
import PresentationModes from './components/ui/PresentationModes'
import SceneEnvironmentControls from './components/ui/SceneEnvironmentControls'
import SubsystemCard from './components/ui/SubsystemCard'
import SubsystemList from './components/ui/SubsystemList'
import ThermalNotes from './components/ui/ThermalNotes'
import UIControls from './components/ui/UIControls'
import VisualLegend from './components/ui/VisualLegend'
import { captureProfiles, caseStudyCapturePlan } from './data/capturePlan'
import {
  accessibilityNotes,
  cameraControlDefaults,
  cameraPresetGroups,
  cameraPresets,
  metadata,
  speedLabels,
  subsystems,
  uiDefaults
} from './data/spacecraftConfig'
import { environmentConfig } from './environments/environmentConfig'
import { useEnvironmentMode } from './environments/useEnvironmentMode'
import { sceneModeConfig } from './modes/sceneModeConfig'
import {
  ENVIRONMENT_MODE_ORDER,
  SCENE_MODE_DEFAULT_ENVIRONMENT,
  SCENE_MODE_ORDER,
  SCENE_MODE_RECOMMENDATIONS
} from './modes/sceneModeTypes'
import { useSceneMode } from './modes/useSceneMode'
import {
  LABEL_PROFILE_ORDER,
  labelProfileConfig
} from './presentation/labelProfiles'
import {
  PRESENTATION_MODE_ORDER,
  presentationModeConfig
} from './presentation/presentationModeConfig'
import {
  getAnnotationPresentation,
  getSubsystemCardData
} from './systems/modeAnnotationSystem'
import { getAnimationPresentation } from './systems/modeAnimationSystem'
import {
  getFitToSelectionPreset,
  getResetCameraPreset
} from './systems/modeCameraSystem'
import {
  getLegendForMode,
  getToggleDefinitionsForMode,
  getVisibleUiSections
} from './systems/modeVisibilitySystem'

const sceneModes = SCENE_MODE_ORDER.map((key) => sceneModeConfig[key])
const environmentOptions = ENVIRONMENT_MODE_ORDER.map((key) => environmentConfig[key])
const presentationModes = PRESENTATION_MODE_ORDER.map(
  (key) => presentationModeConfig[key]
)
const labelProfiles = LABEL_PROFILE_ORDER
  .filter((key) => key !== 'auto')
  .map((key) => labelProfileConfig[key])

const initialState = {
  ...uiDefaults,
  selectedSubsystem: null,
  userOverrides: {},
  activeCaptureAsset: null
}

function applyManagedModeState(state, sceneMode, { clearManagedOverrides = false } = {}) {
  const mode = sceneModeConfig[sceneMode] ?? sceneModeConfig.clean
  const userOverrides = clearManagedOverrides ? { ...state.userOverrides } : state.userOverrides
  const nextState = {
    ...state,
    sceneMode
  }

  Object.entries(mode.managedState).forEach(([key, value]) => {
    if (clearManagedOverrides) {
      delete userOverrides[key]
    }

    if (clearManagedOverrides || !userOverrides[key]) {
      nextState[key] = value
    }
  })

  return {
    ...nextState,
    userOverrides
  }
}

function applyPresentationModeState(state, presentationMode) {
  const mode =
    presentationModeConfig[presentationMode] ?? presentationModeConfig.review
  const nextState = {
    ...state,
    presentationMode,
    labelProfile: mode.labelProfile,
    captureSafeBackground: mode.captureSafeBackground
  }

  Object.entries(mode.managedState ?? {}).forEach(([key, value]) => {
    nextState[key] = value
  })

  return nextState
}

function applyCaptureRecipe(state, recipe) {
  let nextState = applyManagedModeState(state, recipe.sceneMode, {
    clearManagedOverrides: true
  })
  nextState = applyPresentationModeState(nextState, recipe.presentationMode)

  return {
    ...nextState,
    environmentMode: recipe.environmentMode,
    autoFollowModeScene: false,
    activeCameraPreset: recipe.cameraPreset,
    selectedSubsystem: recipe.clearSelection ? null : state.selectedSubsystem,
    hideHudForCapture: recipe.hideHudForCapture ?? false,
    labelProfile: recipe.labelProfile ?? nextState.labelProfile,
    paused: recipe.paused ?? nextState.paused,
    activeCaptureAsset: recipe.key ?? null,
    ...(recipe.overrides ?? {})
  }
}

function viewerReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        [action.key]: !state[action.key],
        userOverrides: {
          ...state.userOverrides,
          [action.key]: true
        }
      }
    case 'setAnimationSpeed':
      return {
        ...state,
        animationSpeed: action.value,
        userOverrides: {
          ...state.userOverrides,
          animationSpeed: true
        }
      }
    case 'setSceneMode': {
      const next = applyManagedModeState(state, action.key)
      const nextEnvironment =
        state.autoFollowModeScene && !state.userOverrides.environmentMode
          ? SCENE_MODE_DEFAULT_ENVIRONMENT[action.key]
          : state.environmentMode

      return {
        ...next,
        environmentMode: nextEnvironment
      }
    }
    case 'setEnvironmentMode':
      return {
        ...state,
        environmentMode: action.key,
        userOverrides: {
          ...state.userOverrides,
          environmentMode: true
        }
      }
    case 'toggleAutoFollowModeScene':
      return {
        ...state,
        autoFollowModeScene: !state.autoFollowModeScene
      }
    case 'resetModeDefaults':
      return applyManagedModeState(state, state.sceneMode, {
        clearManagedOverrides: true
      })
    case 'resetSceneDefaults':
      return {
        ...applyManagedModeState(state, state.sceneMode),
        autoFollowModeScene: true,
        environmentMode: SCENE_MODE_DEFAULT_ENVIRONMENT[state.sceneMode],
        userOverrides: Object.fromEntries(
          Object.entries(state.userOverrides).filter(([key]) => key !== 'environmentMode')
        )
      }
    case 'setCameraPreset':
      return {
        ...state,
        activeCameraPreset: action.key,
        activeCaptureAsset: null
      }
    case 'setPresentationMode':
      return applyPresentationModeState(state, action.key)
    case 'setLabelProfile':
      return {
        ...state,
        labelProfile: action.key,
        showLabels: action.key === 'none' ? false : true,
        showLeaderLines:
          action.key === 'reduced-review' || action.key === 'full-engineering',
        activeCaptureAsset: null
      }
    case 'toggleHideHudForCapture':
      return {
        ...state,
        hideHudForCapture: !state.hideHudForCapture
      }
    case 'showHud':
      return {
        ...state,
        hideHudForCapture: false
      }
    case 'toggleCaptureSafeBackground':
      return {
        ...state,
        captureSafeBackground: !state.captureSafeBackground
      }
    case 'resetCaptureDefaults':
      return applyPresentationModeState(
        {
          ...state,
          hideHudForCapture: false,
          activeCaptureAsset: null
        },
        state.presentationMode
      )
    case 'applyCaptureProfile':
      return applyCaptureRecipe(state, captureProfiles[action.key])
    case 'applyCaptureAsset': {
      const asset = caseStudyCapturePlan.find((entry) => entry.key === action.key)

      if (!asset) {
        return state
      }

      return applyCaptureRecipe(state, {
        key: asset.key,
        sceneMode: asset.recommendedSceneMode,
        presentationMode: asset.recommendedPresentationMode,
        environmentMode: asset.recommendedEnvironment,
        cameraPreset: asset.recommendedCameraPreset,
        labelProfile: asset.labelProfile,
        paused: true,
        clearSelection: true,
        hideHudForCapture: false
      })
    }
    case 'toggleCameraPan':
      return {
        ...state,
        cameraPanEnabled: !state.cameraPanEnabled
      }
    case 'toggleCameraMode':
      return {
        ...state,
        cameraMode: state.cameraMode === 'free' ? 'focusLock' : 'free'
      }
    case 'setSelectedSubsystem':
      return {
        ...state,
        selectedSubsystem: action.key
      }
    case 'resetView':
      return {
        ...state,
        activeCameraPreset: getResetCameraPreset(state.sceneMode)
      }
    case 'fitToSelection':
      return {
        ...state,
        activeCameraPreset: getFitToSelectionPreset(
          state.selectedSubsystem,
          subsystems
        )
      }
    default:
      return state
  }
}

export default function App() {
  const [viewerState, dispatch] = useReducer(viewerReducer, initialState)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const cameraSnapshotRef = useRef(null)
  const [captureMessage, setCaptureMessage] = useState(
    'Camera state will appear here when the live scene reports it.'
  )

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return undefined
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(query.matches)

    updatePreference()
    query.addEventListener('change', updatePreference)

    return () => query.removeEventListener('change', updatePreference)
  }, [])

  const selectedSubsystem = useMemo(
    () => (viewerState.selectedSubsystem ? subsystems[viewerState.selectedSubsystem] : null),
    [viewerState.selectedSubsystem]
  )

  const activeSceneMode = useSceneMode(viewerState.sceneMode)
  const environmentProfile = useEnvironmentMode(viewerState.environmentMode)
  const activePresentationMode =
    presentationModeConfig[viewerState.presentationMode] ??
    presentationModeConfig.review

  const sectionVisibility = useMemo(
    () => getVisibleUiSections(viewerState.sceneMode),
    [viewerState.sceneMode]
  )

  const toggleDefinitions = useMemo(
    () => getToggleDefinitionsForMode(viewerState.sceneMode),
    [viewerState.sceneMode]
  )

  const legend = useMemo(
    () => getLegendForMode(viewerState.sceneMode),
    [viewerState.sceneMode]
  )

  const annotationPresentation = useMemo(
    () => getAnnotationPresentation(viewerState.sceneMode, viewerState, subsystems),
    [viewerState]
  )

  const subsystemCardData = useMemo(
    () => getSubsystemCardData(viewerState.sceneMode, selectedSubsystem),
    [selectedSubsystem, viewerState.sceneMode]
  )

  const animationPresentation = useMemo(
    () => getAnimationPresentation(viewerState.sceneMode, viewerState),
    [viewerState]
  )

  const sceneViewerState = useMemo(
    () => ({
      ...viewerState,
      paused: viewerState.paused || prefersReducedMotion,
      showWorkingFluidParticles: animationPresentation.showBraytonParticles,
      showPlume: animationPresentation.showPlume
    }),
    [animationPresentation, prefersReducedMotion, viewerState]
  )

  const cameraStateSummary = useMemo(() => {
    if (!cameraSnapshotRef.current) {
      return captureMessage
    }

    return `Preset ${viewerState.activeCameraPreset} | Pos ${cameraSnapshotRef.current.position
      .map((value) => value.toFixed(2))
      .join(', ')} | Target ${cameraSnapshotRef.current.target
      .map((value) => value.toFixed(2))
      .join(', ')} | FOV ${cameraSnapshotRef.current.fov.toFixed(1)}`
  }, [captureMessage, viewerState.activeCameraPreset])

  const handleCopyCameraState = async () => {
    const source =
      cameraSnapshotRef.current ??
      {
        position: cameraPresets[viewerState.activeCameraPreset]?.position ?? [],
        target: cameraPresets[viewerState.activeCameraPreset]?.target ?? [],
        fov: cameraPresets[viewerState.activeCameraPreset]?.fov ?? 35
      }
    const text = JSON.stringify(source, null, 2)

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        setCaptureMessage('Current camera state copied to clipboard.')
        return
      }
    } catch (error) {
      setCaptureMessage('Clipboard access failed, but the camera state remains shown here.')
      return
    }

    setCaptureMessage(text)
  }

  return (
    <AppShell
      accessibilityNotes={accessibilityNotes}
      activePresetLabel={cameraPresets[viewerState.activeCameraPreset]?.label}
      cameraActions={
        <CameraTools
          cameraMode={viewerState.cameraMode ?? cameraControlDefaults.cameraMode}
          cameraPanEnabled={
            viewerState.cameraPanEnabled ?? cameraControlDefaults.cameraPanEnabled
          }
          onFitSelection={() => dispatch({ type: 'fitToSelection' })}
          onResetView={() => dispatch({ type: 'resetView' })}
          onToggleCameraMode={() => dispatch({ type: 'toggleCameraMode' })}
          onTogglePan={() => dispatch({ type: 'toggleCameraPan' })}
        />
      }
      cameraControls={
        <CameraPresets
          activePreset={viewerState.activeCameraPreset}
          onSelectPreset={(key) => dispatch({ type: 'setCameraPreset', key })}
          presetGroups={cameraPresetGroups}
          presets={cameraPresets}
        />
      }
      captureStudio={
        <CaptureStudio
          activeAssetKey={viewerState.activeCaptureAsset}
          activeLabelProfile={viewerState.labelProfile}
          cameraStateSummary={cameraStateSummary}
          captureAssets={caseStudyCapturePlan}
          captureProfiles={Object.values(captureProfiles)}
          captureSafeBackground={viewerState.captureSafeBackground}
          hideHudForCapture={viewerState.hideHudForCapture}
          labelProfiles={labelProfiles}
          onApplyCaptureAsset={(key) => dispatch({ type: 'applyCaptureAsset', key })}
          onApplyCaptureProfile={(key) => dispatch({ type: 'applyCaptureProfile', key })}
          onCopyCameraState={handleCopyCameraState}
          onResetCaptureDefaults={() => dispatch({ type: 'resetCaptureDefaults' })}
          onSelectLabelProfile={(key) => dispatch({ type: 'setLabelProfile', key })}
          onToggleCaptureSafeBackground={() =>
            dispatch({ type: 'toggleCaptureSafeBackground' })
          }
          onToggleHideHudForCapture={() =>
            dispatch({ type: 'toggleHideHudForCapture' })
          }
          presentationMode={viewerState.presentationMode}
        />
      }
      controls={
        sectionVisibility.viewerControls ? (
          <UIControls
            speedLabels={speedLabels}
            toggleDefinitions={toggleDefinitions}
            viewerState={viewerState}
            onResetModeDefaults={() => dispatch({ type: 'resetModeDefaults' })}
            onResetSceneDefaults={() => dispatch({ type: 'resetSceneDefaults' })}
            onSpeedChange={(value) =>
              dispatch({ type: 'setAnimationSpeed', value })
            }
            onToggle={(key) => dispatch({ type: 'toggle', key })}
          />
        ) : null
      }
      energyInset={sectionVisibility.energyInset ? <BraytonInset /> : null}
      environmentControls={
        <SceneEnvironmentControls
          autoFollowModeScene={viewerState.autoFollowModeScene}
          environmentMode={viewerState.environmentMode}
          environmentOptions={environmentOptions}
          recommendation={SCENE_MODE_RECOMMENDATIONS[viewerState.sceneMode]}
          onSelectEnvironment={(key) =>
            dispatch({ type: 'setEnvironmentMode', key })
          }
          onToggleAutoFollow={() =>
            dispatch({ type: 'toggleAutoFollowModeScene' })
          }
        />
      }
      hideHudForCapture={viewerState.hideHudForCapture}
      inspectionList={
        sectionVisibility.subsystemDirectory ? (
          <SubsystemList
            activeSubsystem={viewerState.selectedSubsystem}
            subsystemOrder={[
              'reactor',
              'shield',
              'braytonPowerUnit',
              'radiators',
              'separationBoom',
              'spacecraftBus',
              'pmad',
              'propellantTanks',
              'sciencePayload',
              'electricThrusters'
            ]}
            subsystems={subsystems}
            onSelectSubsystem={(key) =>
              dispatch({ type: 'setSelectedSubsystem', key })
            }
          />
        ) : null
      }
      legend={
        sectionVisibility.legend && legend ? (
          <VisualLegend items={legend.items} title={legend.title} />
        ) : null
      }
      metadata={metadata}
      modeControls={
        <InspectionModes
          activeMode={viewerState.sceneMode}
          modes={sceneModes}
          onSelectMode={(key) => dispatch({ type: 'setSceneMode', key })}
        />
      }
      onShowHud={() => dispatch({ type: 'showHud' })}
      presentationControls={
        <PresentationModes
          activeMode={viewerState.presentationMode}
          modes={presentationModes}
          onSelectMode={(key) => dispatch({ type: 'setPresentationMode', key })}
        />
      }
      scene={
        <SceneRoot
          annotationPresentation={annotationPresentation}
          animationPresentation={animationPresentation}
          environmentMode={viewerState.environmentMode}
          environmentProfile={environmentProfile}
          onCameraStateChange={(snapshot) => {
            cameraSnapshotRef.current = snapshot
          }}
          onSelectSubsystem={(key) =>
            dispatch({ type: 'setSelectedSubsystem', key })
          }
          presentationMode={viewerState.presentationMode}
          sceneMode={viewerState.sceneMode}
          sceneModeProfile={activeSceneMode}
          viewerState={sceneViewerState}
        />
      }
      sectionVisibility={sectionVisibility}
      selectedSubsystem={selectedSubsystem}
      statusNote={`${activeSceneMode.description} ${activePresentationMode.description}`}
      subsystemCard={
        sectionVisibility.subsystemCard ? (
          <SubsystemCard
            cardData={subsystemCardData}
            onFocusPreset={(key) => dispatch({ type: 'setCameraPreset', key })}
            sceneMode={viewerState.sceneMode}
            subsystem={selectedSubsystem}
          />
        ) : null
      }
      thermalNotes={sectionVisibility.thermalNotes ? <ThermalNotes /> : null}
    />
  )
}
