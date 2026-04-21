export const earthPresentationConfig = {
  texture: {
    seed: 21902,
    cloudSeed: 9012,
    oceanDay: '#17325a',
    oceanNight: '#050c18',
    landDay: '#5b674f',
    landWarm: '#86714c',
    cloudColor: '#eef6ff',
    cityLightColor: 'rgba(255, 191, 104, 0.42)'
  },
  terminator: {
    direction: [-34, 20, 14],
    softness: 0.36,
    nightOpacity: 0.64,
    cityLightOpacity: 0.78
  },
  cloudDeck: {
    scale: 1.006,
    opacityByMode: {
      clean: 0.34,
      engineering: 0.24,
      energy: 0.14,
      thermal: 0.07
    }
  },
  atmosphere: {
    innerScale: 1.024,
    outerScale: 1.045,
    limbScale: 1.07,
    color: '#7cc2ff',
    rimColor: '#dff3ff',
    limbColor: '#9bdcff',
    opacityByMode: {
      clean: 0.48,
      engineering: 0.38,
      energy: 0.18,
      thermal: 0.1
    }
  }
}
