import { useMemo } from 'react'
import { environmentConfig } from './environmentConfig'

export function useEnvironmentMode(environmentMode) {
  return useMemo(
    () => environmentConfig[environmentMode] ?? environmentConfig['deep-space'],
    [environmentMode]
  )
}
