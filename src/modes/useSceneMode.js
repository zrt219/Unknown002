import { useMemo } from 'react'
import { sceneModeConfig } from './sceneModeConfig'

export function useSceneMode(sceneMode) {
  return useMemo(
    () => sceneModeConfig[sceneMode] ?? sceneModeConfig.clean,
    [sceneMode]
  )
}
