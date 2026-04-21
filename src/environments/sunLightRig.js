export const sunLightRig = {
  directionName: 'fixed left sunrise key',
  lightPosition: [-34, 20, 14],
  keyColor: '#fff5e4',
  fillColor: '#89bfff',
  thermalFillColor: '#ffb067',
  rimColor: '#d8eeff',
  thermalRimColor: '#8fb8dc',
  earthBounceColor: '#93c8ff'
}

export const perModeLightAdjustments = {
  clean: {
    ambient: 0.16,
    hemisphere: 0.18,
    key: 2.65,
    fill: 0.22,
    rim: 0.34,
    exposure: 1.2
  },
  engineering: {
    ambient: 0.2,
    hemisphere: 0.24,
    key: 2.2,
    fill: 0.28,
    rim: 0.22,
    exposure: 1.08
  },
  energy: {
    ambient: 0.12,
    hemisphere: 0.14,
    key: 1.76,
    fill: 0.18,
    rim: 0.16,
    exposure: 1.02
  },
  thermal: {
    ambient: 0.08,
    hemisphere: 0.1,
    key: 1.3,
    fill: 0.12,
    rim: 0.1,
    exposure: 0.94
  }
}

export const environmentLightAdjustments = {
  'deep-space': {
    ambientShift: 0,
    hemisphereShift: 0.02,
    keyMultiplier: 1,
    fillBoost: 0.02,
    rimBoost: 0.04,
    exposureMultiplier: 1
  },
  'earth-orbit': {
    ambientShift: 0.02,
    hemisphereShift: 0.04,
    keyMultiplier: 1.08,
    fillBoost: 0.08,
    rimBoost: 0.06,
    exposureMultiplier: 1.05
  },
  'thermal-analysis': {
    ambientShift: -0.03,
    hemisphereShift: -0.04,
    keyMultiplier: 0.9,
    fillBoost: -0.02,
    rimBoost: -0.03,
    exposureMultiplier: 0.9
  }
}
