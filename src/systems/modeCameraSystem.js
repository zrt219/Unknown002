import { sceneModeConfig } from '../modes/sceneModeConfig'
import { modeCameraProfiles } from './orbitalCameraProfiles.js'

export function getResetCameraPreset(sceneMode) {
  return (
    modeCameraProfiles[sceneMode]?.resetPreset ??
    sceneModeConfig[sceneMode]?.defaultCameraPreset ??
    'heroTechnical'
  )
}

export function getFitToSelectionPreset(selectedSubsystem, subsystems) {
  return subsystems[selectedSubsystem]?.cameraPreset ?? 'heroTechnical'
}
