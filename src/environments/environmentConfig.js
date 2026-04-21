import {
  environmentProfiles,
  orbitalBaseScene,
  orbitalSceneBible
} from './orbitalSceneConfig.js'

function buildEnvironmentProfile(profile) {
  return {
    ...orbitalBaseScene,
    ...profile,
    sceneBible: orbitalSceneBible,
    galaxyBand: {
      ...orbitalBaseScene.galaxyBand,
      sceneOpacity: profile.opacity.galaxyBand
    },
    sun: {
      ...orbitalBaseScene.sun,
      sceneOpacity: profile.opacity.sun
    },
    earth: {
      ...orbitalBaseScene.earth,
      sceneOpacity: profile.opacity.earth,
      atmosphereOpacity: profile.opacity.atmosphere
    }
  }
}

export const environmentConfig = Object.fromEntries(
  Object.entries(environmentProfiles).map(([key, profile]) => [
    key,
    buildEnvironmentProfile(profile)
  ])
)

export { orbitalBaseScene, orbitalSceneBible }
