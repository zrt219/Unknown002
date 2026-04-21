export const LABEL_PROFILE_ORDER = [
  'auto',
  'full-engineering',
  'reduced-review',
  'capture',
  'none'
]

export const labelProfileConfig = {
  auto: {
    key: 'auto',
    label: 'Scene-Managed Labels',
    description: 'Use the current scene mode defaults and density rules.'
  },
  'full-engineering': {
    key: 'full-engineering',
    label: 'Full Engineering Labels',
    description: 'Show the full engineering label population for interactive inspection.'
  },
  'reduced-review': {
    key: 'reduced-review',
    label: 'Reduced Review Labels',
    description: 'Use a curated major-subsystem set for review screenshots and diagrams.'
  },
  capture: {
    key: 'capture',
    label: 'Capture Labels',
    description: 'Keep only high-value labels for polished exports.'
  },
  none: {
    key: 'none',
    label: 'No Labels',
    description: 'Hide all in-scene labels for clean hero captures.'
  }
}
