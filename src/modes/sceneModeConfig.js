import { cleanModeConfig } from './cleanModeConfig'
import { engineeringModeConfig } from './engineeringModeConfig'
import { energyModeConfig } from './energyModeConfig'
import { thermalModeConfig } from './thermalModeConfig'
import { modePresentationProfiles } from './modePresentationProfiles'

export const sceneModeConfig = {
  clean: {
    ...cleanModeConfig,
    presentation: modePresentationProfiles.clean
  },
  engineering: {
    ...engineeringModeConfig,
    presentation: modePresentationProfiles.engineering
  },
  energy: {
    ...energyModeConfig,
    presentation: modePresentationProfiles.energy
  },
  thermal: {
    ...thermalModeConfig,
    presentation: modePresentationProfiles.thermal
  }
}
