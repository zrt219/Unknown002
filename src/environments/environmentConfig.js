export const environmentConfig = {
  'deep-space': {
    key: 'deep-space',
    label: 'Deep Space',
    description: 'Neutral technical backdrop with restrained stars.',
    background: '#030712',
    starLayers: [
      {
        count: 3200,
        depth: 140,
        factor: 3.3,
        radius: 220,
        speed: 0.025
      },
      {
        count: 420,
        depth: 118,
        factor: 7.1,
        radius: 210,
        speed: 0.012
      }
    ],
    stars: {
      count: 1800,
      depth: 90,
      factor: 3.2,
      radius: 190,
      speed: 0.05
    },
    galaxyBand: {
      visible: true,
      position: [48, 20, -172],
      rotation: [0.18, -0.56, -0.14],
      scale: [176, 48],
      primaryTint: '#f1cdb3',
      secondaryTint: '#cad3ff',
      sceneOpacity: {
        clean: 0.52,
        engineering: 0.66,
        energy: 0.58,
        thermal: 0.16
      }
    },
    sun: {
      visible: true,
      position: [-82, 24, -154],
      coreScale: 13,
      haloScale: 30,
      glowScale: 52,
      lightPosition: [-30, 18, 12],
      coreColor: '#fff3d7',
      haloColor: '#ffb567',
      sceneOpacity: {
        clean: 0.74,
        engineering: 0.54,
        energy: 0.36,
        thermal: 0
      }
    },
    earth: {
      visible: false,
      radius: 120,
      position: [30, -192, -248]
    }
  },
  'earth-orbit': {
    key: 'earth-orbit',
    label: 'Earth Orbit',
    description: 'Contextual Earth-limb presentation for hero framing.',
    background: '#020611',
    starLayers: [
      {
        count: 4200,
        depth: 150,
        factor: 3.7,
        radius: 236,
        speed: 0.018
      },
      {
        count: 620,
        depth: 124,
        factor: 7.9,
        radius: 222,
        speed: 0.01
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
      secondaryTint: '#c8d0ff',
      sceneOpacity: {
        clean: 0.82,
        engineering: 0.74,
        energy: 0.46,
        thermal: 0.18
      }
    },
    sun: {
      visible: true,
      position: [-86, 26, -156],
      coreScale: 18,
      haloScale: 42,
      glowScale: 74,
      lightPosition: [-34, 20, 14],
      coreColor: '#fff4dc',
      haloColor: '#ffb869',
      sceneOpacity: {
        clean: 1,
        engineering: 0.82,
        energy: 0.56,
        thermal: 0.22
      }
    },
    earth: {
      visible: true,
      radius: 154,
      position: [32, -210, -252],
      rotation: [0.44, 0.08, -0.3],
      atmosphereScale: 1.025,
      atmosphereColor: '#7cc2ff',
      sceneOpacity: {
        clean: 1,
        engineering: 0.74,
        energy: 0.28,
        thermal: 0.14
      },
      atmosphereOpacity: {
        clean: 0.48,
        engineering: 0.38,
        energy: 0.18,
        thermal: 0.1
      }
    }
  },
  'thermal-analysis': {
    key: 'thermal-analysis',
    label: 'Thermal Analysis',
    description: 'Near-black environment optimized for thermal readability.',
    background: '#01030a',
    starLayers: [
      {
        count: 220,
        depth: 82,
        factor: 1.9,
        radius: 150,
        speed: 0.008
      },
      {
        count: 36,
        depth: 60,
        factor: 4.2,
        radius: 124,
        speed: 0
      }
    ],
    stars: {
      count: 180,
      depth: 70,
      factor: 1.7,
      radius: 140,
      speed: 0.01
    },
    galaxyBand: {
      visible: true,
      position: [52, 20, -176],
      rotation: [0.18, -0.58, -0.12],
      scale: [172, 46],
      primaryTint: '#f1cdb3',
      secondaryTint: '#c7d0ff',
      sceneOpacity: {
        clean: 0.16,
        engineering: 0.12,
        energy: 0.1,
        thermal: 0.06
      }
    },
    sun: {
      visible: false,
      position: [-82, 22, -154],
      coreScale: 10,
      haloScale: 24,
      glowScale: 40,
      lightPosition: [-30, 18, 12],
      coreColor: '#fff0d6',
      haloColor: '#ffb567',
      sceneOpacity: {
        clean: 0,
        engineering: 0,
        energy: 0,
        thermal: 0
      }
    },
    earth: {
      visible: false,
      radius: 150,
      position: [32, -210, -252]
    }
  }
}
