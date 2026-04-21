import { sceneModeConfig } from '../modes/sceneModeConfig'

export function getResetCameraPreset(sceneMode) {
  return sceneModeConfig[sceneMode]?.defaultCameraPreset ?? 'heroTechnical'
}

export function getFitToSelectionPreset(selectedSubsystem, subsystems) {
  return subsystems[selectedSubsystem]?.cameraPreset ?? 'heroTechnical'
}
