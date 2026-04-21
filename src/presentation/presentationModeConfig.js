export const PRESENTATION_MODE_ORDER = [
  'review',
  'capture',
  'diagram',
  'beautyTechnical'
]

export const presentationModeConfig = {
  review: {
    key: 'review',
    label: 'Review Mode',
    description:
      'Design-review state with the active scene story intact and reduced UI noise.',
    labelProfile: 'auto',
    captureSafeBackground: false,
    managedState: {}
  },
  capture: {
    key: 'capture',
    label: 'Capture Mode',
    description:
      'Export-oriented state with paused motion, reduced labels, and a cleaner backdrop.',
    labelProfile: 'capture',
    captureSafeBackground: true,
    managedState: {
      paused: true
    }
  },
  diagram: {
    key: 'diagram',
    label: 'Diagram Mode',
    description:
      'Case-study diagram state with review labels, leader lines, and analytical background contrast.',
    labelProfile: 'reduced-review',
    captureSafeBackground: true,
    managedState: {
      showLabels: true,
      showLeaderLines: true,
      paused: true
    }
  },
  beautyTechnical: {
    key: 'beautyTechnical',
    label: 'Beauty Technical Mode',
    description:
      'Presentation-first framing with minimal annotation and no helper clutter.',
    labelProfile: 'none',
    captureSafeBackground: false,
    managedState: {
      showLabels: false,
      showLeaderLines: false,
      showGrid: false,
      paused: true
    }
  }
}
