import { modePresentationProfiles } from '../modes/modePresentationProfiles'

export const orbitalCompositionLock = {
  baselinePreset: 'heroTechnical',
  fixedSceneElements: [
    'spacecraft world position',
    'Earth limb anchor',
    'sun source direction',
    'galaxy band placement'
  ],
  explicitCameraActions: [
    'Reset View',
    'Fit to Selection',
    'Camera Preset',
    'Capture Asset'
  ]
}

export const modeCameraProfiles = {
  clean: {
    resetPreset: modePresentationProfiles.clean.cameraTreatment.resetPreset,
    intent: 'beautiful hero composition with the full spacecraft readable'
  },
  engineering: {
    resetPreset: modePresentationProfiles.engineering.cameraTreatment.resetPreset,
    intent: 'architecture framing that preserves the Earth-sun composition'
  },
  energy: {
    resetPreset: modePresentationProfiles.energy.cameraTreatment.resetPreset,
    intent: 'Brayton, PMAD, heat rejection, and propulsion flow in one frame'
  },
  thermal: {
    resetPreset: modePresentationProfiles.thermal.cameraTreatment.resetPreset,
    intent: 'reactor-to-radiator heat logic with the same orbital foundation'
  }
}

export const screenshotFramingConfig = {
  hero: {
    preset: 'heroTechnical',
    labelProfile: 'none',
    environmentMode: 'earth-orbit'
  },
  cleanSide: {
    preset: 'cleanSidePresentation',
    labelProfile: 'none',
    environmentMode: 'earth-orbit'
  },
  thermalStory: {
    preset: 'thermalStory',
    labelProfile: 'capture',
    environmentMode: 'thermal-analysis'
  }
}
