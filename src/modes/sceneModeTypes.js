export const SCENE_MODE_ORDER = [
  'clean',
  'engineering',
  'energy',
  'thermal'
]

export const SCENE_MODE_DEFAULT_ENVIRONMENT = {
  clean: 'earth-orbit',
  engineering: 'deep-space',
  energy: 'deep-space',
  thermal: 'thermal-analysis'
}

export const SCENE_MODE_RECOMMENDATIONS = {
  clean: 'Earth Orbit recommended for hero framing and README captures.',
  engineering: 'Deep Space recommended for neutral technical readability.',
  energy: 'Deep Space recommended so Brayton and power-flow overlays stay legible.',
  thermal:
    'Thermal Analysis recommended so radiator dominance and heat paths read clearly.'
}

export const MODE_MANAGED_KEYS = [
  'showLabels',
  'showLeaderLines',
  'showBraytonOverlay',
  'showWorkingFluidParticles',
  'showHeatArrows',
  'showPowerFlow',
  'showShieldCone',
  'showPlume',
  'showGrid',
  'showThermalMaterials',
  'showRadiatorEmphasis',
  'paused',
  'animationSpeed'
]

export const ENVIRONMENT_MODE_ORDER = [
  'deep-space',
  'earth-orbit',
  'thermal-analysis'
]
