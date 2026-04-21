import { earthPresentationConfig } from './earthPresentationConfig.js'

export const orbitalSceneBible = {
  title: 'Persistent Earth-limb sunrise foundation',
  story:
    'UNKNOWN02 is staged in one coherent orbital sunrise scene; modes interpret the same spacecraft and environment rather than replacing the world.',
  fixedElements: [
    'Earth limb position and curvature',
    'warm sun source and light direction',
    'starfield and galaxy-band placement',
    'spacecraft world-space staging',
    'camera preset framing family'
  ],
  modeAdjustments: [
    'background brightness',
    'Earth and atmosphere opacity',
    'sun sprite intensity',
    'lighting exposure',
    'overlay contrast support'
  ]
}

export const orbitalBaseScene = {
  background: '#020611',
  starLayers: [
    {
      count: 4200,
      depth: 150,
      factor: 3.7,
      radius: 236,
      speed: 0.018,
      sceneOpacity: { clean: 1, engineering: 0.92, energy: 0.72, thermal: 0.46 }
    },
    {
      count: 620,
      depth: 124,
      factor: 7.9,
      radius: 222,
      speed: 0.01,
      sceneOpacity: { clean: 0.86, engineering: 0.78, energy: 0.56, thermal: 0.28 }
    }
  ],
  stars: {
    count: 1100,
    depth: 85,
    factor: 2.8,
    radius: 180,
    speed: 0.03
  },
  galaxyBand: {
    visible: true,
    position: [56, 22, -176],
    rotation: [0.18, -0.58, -0.12],
    scale: [182, 50],
    primaryTint: '#f4d0b8',
    secondaryTint: '#c8d0ff'
  },
  sun: {
    visible: true,
    position: [-86, 26, -156],
    coreScale: 12,
    discScale: 9,
    haloScale: 38,
    glowScale: 76,
    starburstScale: [110, 62, 1],
    discOpacity: 1,
    haloOpacity: 0.34,
    glowOpacity: 0.12,
    starburstOpacity: 0.18,
    lightPosition: [-34, 20, 14],
    coreColor: '#fff4dc',
    haloColor: '#ffb869'
  },
  earth: {
    visible: true,
    radius: 154,
    position: [32, -210, -252],
    rotation: [0.44, 0.08, -0.3],
    atmosphereScale: 1.025,
    atmosphereColor: '#7cc2ff',
    presentation: earthPresentationConfig
  }
}

export const environmentProfiles = {
  'deep-space': {
    key: 'deep-space',
    label: 'Deep Space',
    description: 'Neutral technical lighting treatment of the same orbital world.',
    background: '#030712',
    opacity: {
      galaxyBand: { clean: 0.54, engineering: 0.62, energy: 0.5, thermal: 0.18 },
      sun: { clean: 0.78, engineering: 0.62, energy: 0.42, thermal: 0.2 },
      earth: { clean: 0.72, engineering: 0.56, energy: 0.28, thermal: 0.16 },
      atmosphere: { clean: 0.32, engineering: 0.26, energy: 0.16, thermal: 0.1 }
    }
  },
  'earth-orbit': {
    key: 'earth-orbit',
    label: 'Earth Orbit',
    description: 'Hero sunrise treatment of the same fixed Earth-limb scene.',
    background: '#020611',
    opacity: {
      galaxyBand: { clean: 0.82, engineering: 0.74, energy: 0.46, thermal: 0.18 },
      sun: { clean: 1, engineering: 0.82, energy: 0.56, thermal: 0.24 },
      earth: { clean: 1, engineering: 0.74, energy: 0.3, thermal: 0.16 },
      atmosphere: { clean: 0.48, engineering: 0.38, energy: 0.18, thermal: 0.1 }
    }
  },
  'thermal-analysis': {
    key: 'thermal-analysis',
    label: 'Thermal Analysis',
    description: 'Muted analytical treatment of the same orbital world.',
    background: '#01030a',
    opacity: {
      galaxyBand: { clean: 0.18, engineering: 0.14, energy: 0.12, thermal: 0.06 },
      sun: { clean: 0.36, engineering: 0.28, energy: 0.2, thermal: 0.12 },
      earth: { clean: 0.34, engineering: 0.24, energy: 0.16, thermal: 0.1 },
      atmosphere: { clean: 0.18, engineering: 0.14, energy: 0.1, thermal: 0.06 }
    }
  }
}
