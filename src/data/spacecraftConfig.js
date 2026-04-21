export const projectIdentity = {
  name: 'ZRT UNKNOWN02',
  viewerTitle: 'Technical Viewer',
  fullTitle: 'ZRT UNKNOWN02 Technical Viewer',
  subtitle:
    'A realistic browser-based 3D engineering viewer for a nuclear-electric propulsion spacecraft concept.',
  credit: 'Designed by ZRT UNKNOWN02'
}

export const metadata = {
  title: projectIdentity.fullTitle,
  subtitle: projectIdentity.subtitle,
  credit: projectIdentity.credit
}

export const colors = {
  backgroundTop: '#030712',
  backgroundBottom: '#0b1120',
  panel: 'rgba(8, 15, 29, 0.84)',
  panelBorder: 'rgba(148, 163, 184, 0.22)',
  text: '#e2e8f0',
  mutedText: '#94a3b8',
  accent: '#7dd3fc',
  reactorBody: '#3b414c',
  reactorCore: '#ff7b42',
  shieldPrimary: '#b38b47',
  shieldSecondary: '#5f5647',
  braytonBody: '#5a7f63',
  braytonAccent: '#a5d6a7',
  radiatorPanel: '#47507f',
  radiatorEdge: '#7c84ba',
  truss: '#78818f',
  cable: '#4fd1c5',
  bus: '#9aa3b2',
  tank: '#c8d0d9',
  payload: '#d8dee7',
  thruster: '#76808c',
  plume: '#84a7ff',
  power: '#f8d665',
  labelGlow: 'rgba(125, 211, 252, 0.18)',
  workingFluidCold: '#72b6ff',
  workingFluidWarm: '#f59e0b',
  workingFluidHot: '#ef4444',
  heatRoute: '#8b9cff',
  heatInput: '#ff8c42',
  electricPulse: '#fff0a6'
}

export const subsystemOrder = [
  'reactor',
  'shield',
  'braytonPowerUnit',
  'radiators',
  'separationBoom',
  'spacecraftBus',
  'propellantTanks',
  'sciencePayload',
  'electricThrusters'
]

export const inspectionSubsystemOrder = [
  'reactor',
  'shield',
  'braytonPowerUnit',
  'radiators',
  'separationBoom',
  'spacecraftBus',
  'pmad',
  'propellantTanks',
  'sciencePayload',
  'electricThrusters'
]

export const uiDefaults = {
  showLabels: false,
  showLeaderLines: false,
  showBraytonOverlay: false,
  showWorkingFluidParticles: true,
  showHeatArrows: false,
  showPowerFlow: false,
  showShieldCone: false,
  showPlume: true,
  showGrid: false,
  showThermalMaterials: false,
  showRadiatorEmphasis: false,
  paused: false,
  animationSpeed: 1,
  activeCameraPreset: 'heroTechnical',
  sceneMode: 'clean',
  environmentMode: 'earth-orbit',
  autoFollowModeScene: true,
  presentationMode: 'review',
  labelProfile: 'auto',
  hideHudForCapture: false,
  captureSafeBackground: false,
  cameraMode: 'free',
  cameraPanEnabled: true
}

export const cameraControlDefaults = {
  cameraMode: 'free',
  cameraPanEnabled: true
}

export const cameraControlTuning = {
  dampingFactor: 0.1,
  rotateSpeed: 0.9,
  zoomSpeed: 1.18,
  panSpeed: 0.96,
  minDistance: 7,
  maxDistance: 72,
  minPolarAngle: Math.PI / 5.8,
  maxPolarAngle: Math.PI / 1.55,
  transitionSharpness: 2.45,
  focusLockSharpness: 1.45
}

export const cameraControlProfiles = {
  presentation: {
    minDistance: 16,
    maxDistance: 76,
    transitionSharpness: 2.8,
    rotateSpeed: 0.78,
    zoomSpeed: 1.02
  },
  system: {
    minDistance: 12,
    maxDistance: 80,
    transitionSharpness: 2.5
  },
  closeUp: {
    minDistance: 2.4,
    maxDistance: 22,
    transitionSharpness: 3.1,
    rotateSpeed: 0.72,
    zoomSpeed: 0.95,
    panSpeed: 0.74
  },
  plan: {
    minDistance: 14,
    maxDistance: 82,
    minPolarAngle: 0.03,
    maxPolarAngle: 0.42,
    rotateSpeed: 0.45,
    transitionSharpness: 2.4
  }
}

export const toggleDefinitions = [
  {
    group: 'Display Layers',
    items: [
      { key: 'showLabels', label: 'Labels' },
      { key: 'showLeaderLines', label: 'Leader Lines' },
      { key: 'showShieldCone', label: 'Radiation Shield Cone' },
      { key: 'showGrid', label: 'Grid / Axis Helper' }
    ]
  },
  {
    group: 'Energy Flow & Animation',
    items: [
      { key: 'showBraytonOverlay', label: 'Brayton Overlay' },
      {
        key: 'showWorkingFluidParticles',
        label: 'Working-Fluid Particles',
        dependsOn: 'showBraytonOverlay'
      },
      { key: 'showPowerFlow', label: 'Electric Power Flow' },
      { key: 'showHeatArrows', label: 'Heat Rejection Arrows' },
      { key: 'showPlume', label: 'Thruster Plume' },
      { key: 'showThermalMaterials', label: 'Thermal Materials' },
      { key: 'showRadiatorEmphasis', label: 'Radiator Emphasis' },
      { key: 'paused', label: 'Pause Animation', emphasized: true }
    ]
  }
]

export const speedLabels = {
  slow: 0.6,
  nominal: 1,
  fast: 1.4
}

export const cameraPresets = {
  overviewSide: {
    label: 'Overview Side',
    category: 'System-Level',
    position: [1.6, 5.1, 58],
    target: [-1.4, 1.05, 0],
    fov: 34,
    controlProfile: 'system',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'none',
    recommendedSceneMode: 'clean',
    recommendedOverlaySet: 'No overlays'
  },
  overviewThreeQuarter: {
    label: 'Overview 3/4',
    category: 'System-Level',
    position: [13.8, 8.6, 50],
    target: [-1.8, 1.25, 0],
    fov: 36,
    controlProfile: 'system',
    lockPan: false,
    showGrid: false,
    recommendedLabelProfile: 'auto',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Mode-managed'
  },
  overviewPlan: {
    label: 'Overview Top / Plan',
    category: 'System-Level',
    position: [1.2, 38, 2.8],
    target: [0, 0.95, 0],
    fov: 31,
    controlProfile: 'plan',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Leader lines only'
  },
  energyFlowOverview: {
    label: 'Energy Flow Overview',
    category: 'System-Level',
    position: [6.0, 11.0, 54],
    target: [-3.2, 1.7, 0.2],
    fov: 37,
    controlProfile: 'system',
    lockPan: false,
    showGrid: false,
    recommendedLabelProfile: 'capture',
    recommendedSceneMode: 'energy',
    recommendedOverlaySet: 'Brayton + power + heat'
  },
  reactorClose: {
    label: 'Reactor Close',
    category: 'Subsystem Close-Ups',
    position: [-18.2, 4.2, 10.4],
    target: [-24.1, 1.45, 0],
    fov: 23,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  shieldClose: {
    label: 'Shield Close',
    category: 'Subsystem Close-Ups',
    position: [-15.9, 4.4, 10.7],
    target: [-20.7, 2.0, 0],
    fov: 24,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  braytonUnitClose: {
    label: 'Brayton Unit Close',
    category: 'Subsystem Close-Ups',
    position: [-10.9, 5.1, 11.7],
    target: [-15.45, 1.75, 0.15],
    fov: 24,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'capture',
    recommendedSceneMode: 'energy',
    recommendedOverlaySet: 'Brayton + heat path'
  },
  radiatorRootClose: {
    label: 'Radiator Root Close',
    category: 'Subsystem Close-Ups',
    position: [-3.8, 6.4, 11.6],
    target: [-8.3, 2.6, 1.1],
    fov: 24,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  radiatorOverview: {
    label: 'Radiator Overview',
    category: 'Subsystem Close-Ups',
    position: [-1.5, 10.8, 19.2],
    target: [-8.3, 5.5, 2.6],
    fov: 31,
    controlProfile: 'system',
    lockPan: false,
    showGrid: false,
    recommendedLabelProfile: 'capture',
    recommendedSceneMode: 'thermal',
    recommendedOverlaySet: 'Thermal materials + radiator emphasis'
  },
  boomStructureClose: {
    label: 'Boom Structure Close',
    category: 'Subsystem Close-Ups',
    position: [5.8, 4.0, 16.8],
    target: [0.6, 0.8, 0],
    fov: 25,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  busSystemsClose: {
    label: 'Bus Systems Close',
    category: 'Subsystem Close-Ups',
    position: [16.8, 6.0, 12.8],
    target: [11.8, 2.45, 0],
    fov: 24,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  tanksPmadClose: {
    label: 'Tanks and PMAD Close',
    category: 'Subsystem Close-Ups',
    position: [19.6, 5.3, 12.4],
    target: [15.2, 2.25, 0.15],
    fov: 23,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  thrusterClusterClose: {
    label: 'Thruster Cluster Close',
    category: 'Subsystem Close-Ups',
    position: [26.8, 4.3, 9.8],
    target: [22.85, 1.05, 0.55],
    fov: 20,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'capture',
    recommendedSceneMode: 'energy',
    recommendedOverlaySet: 'Power flow + plume'
  },
  payloadClose: {
    label: 'Payload Close',
    category: 'Subsystem Close-Ups',
    position: [18.8, 6.8, 9.8],
    target: [15.15, 3.35, -2.15],
    fov: 21,
    controlProfile: 'closeUp',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'reduced-review',
    recommendedSceneMode: 'engineering',
    recommendedOverlaySet: 'Labels + leader lines'
  },
  heroTechnical: {
    label: 'Hero Technical View',
    category: 'Presentation',
    position: [6.0, 7.1, 58],
    target: [-1.8, 1.25, 0.1],
    fov: 34,
    controlProfile: 'presentation',
    lockPan: false,
    showGrid: false,
    recommendedLabelProfile: 'none',
    recommendedSceneMode: 'clean',
    recommendedOverlaySet: 'No overlays'
  },
  cleanSidePresentation: {
    label: 'Clean Side Presentation',
    category: 'Presentation',
    position: [1.6, 4.9, 62],
    target: [-1.8, 1.0, 0],
    fov: 31,
    controlProfile: 'presentation',
    lockPan: true,
    showGrid: false,
    recommendedLabelProfile: 'none',
    recommendedSceneMode: 'clean',
    recommendedOverlaySet: 'No overlays'
  },
  thermalStory: {
    label: 'Thermal Story View',
    category: 'Presentation',
    position: [-4.6, 10.8, 42],
    target: [-9.8, 3.4, 1.4],
    fov: 36,
    controlProfile: 'presentation',
    lockPan: false,
    showGrid: false,
    recommendedLabelProfile: 'capture',
    recommendedSceneMode: 'thermal',
    recommendedOverlaySet: 'Thermal materials + heat path'
  },
  propulsionStory: {
    label: 'Propulsion Story View',
    category: 'Presentation',
    position: [24.8, 5.8, 14.6],
    target: [20.6, 1.25, 0.45],
    fov: 27,
    controlProfile: 'presentation',
    lockPan: false,
    showGrid: false,
    recommendedLabelProfile: 'capture',
    recommendedSceneMode: 'energy',
    recommendedOverlaySet: 'Power flow + plume'
  }
}

export const cameraPresetGroups = [
  {
    label: 'System-Level',
    items: [
      'overviewSide',
      'overviewThreeQuarter',
      'overviewPlan',
      'energyFlowOverview'
    ]
  },
  {
    label: 'Subsystem Close-Ups',
    items: [
      'reactorClose',
      'shieldClose',
      'braytonUnitClose',
      'radiatorRootClose',
      'radiatorOverview',
      'boomStructureClose',
      'busSystemsClose',
      'tanksPmadClose',
      'thrusterClusterClose',
      'payloadClose'
    ]
  },
  {
    label: 'Presentation',
    items: [
      'heroTechnical',
      'cleanSidePresentation',
      'thermalStory',
      'propulsionStory'
    ]
  }
]

export const cameraPresetOrder = cameraPresetGroups.flatMap((group) => group.items)

export const legendItems = [
  {
    key: 'thermalInput',
    label: 'Thermal Input',
    color: colors.heatInput,
    meaning: 'Reactor heat entering the Brayton conversion path.'
  },
  {
    key: 'coldLoop',
    label: 'Cold Working Fluid',
    color: colors.workingFluidCold,
    meaning: 'Cooled loop return and radiator-side fluid.'
  },
  {
    key: 'warmLoop',
    label: 'Warm / Compressed',
    color: colors.workingFluidWarm,
    meaning: 'Compressed or reheating working-fluid leg.'
  },
  {
    key: 'hotLoop',
    label: 'Hot Working Fluid',
    color: colors.workingFluidHot,
    meaning: 'High-temperature turbine-entry portion of the Brayton loop.'
  },
  {
    key: 'electricPower',
    label: 'Electric Power',
    color: colors.power,
    meaning: 'Generator output routed through PMAD to bus loads and thrusters.'
  },
  {
    key: 'plume',
    label: 'Electric Propulsion',
    color: colors.plume,
    meaning: 'Subtle ion-plume cue, not a chemical flame.'
  },
  {
    key: 'structure',
    label: 'Structure',
    color: colors.truss,
    meaning: 'Boom, manifolds, racks, and propulsion support hardware.'
  },
  {
    key: 'shield',
    label: 'Radiation Shield',
    color: colors.shieldPrimary,
    meaning: 'Mass dedicated to protecting the bus and payload line-of-sight.'
  }
]

export const accessibilityNotes = [
  'All viewer panels use semantic headings, buttons, radios, and labeled toggles.',
  'Scene mode, environment, and subsystem selection are keyboard accessible.',
  'Animations freeze automatically when system reduced-motion is enabled.'
]

export const subsystems = {
  reactor: {
    id: 'reactor',
    label: 'Compact Fission Reactor',
    note: 'Thermal source, not a thrust engine.',
    purpose: 'Provides thermal power for the spacecraft power system.',
    placementRationale:
      'Located at the reactor end of the vehicle to keep the heat source away from sensitive payload and avionics.',
    realismNote:
      'The reactor is not a thrust engine. It supplies heat to the power conversion system.',
    colorMeaning:
      'Orange thermal cue marks localized heat production in the compact core.',
    relatedEnergyFlow:
      'Feeds thermal input into the closed Brayton conversion loop.',
    position: [-24.4, 0, 0],
    focusTarget: [-24.4, 1.45, 0],
    leaderTarget: [-24.4, 1.45, 0],
    labelAnchor: [-24.3, 3.85, 0],
    cameraPreset: 'reactorClose',
    categoryColor: colors.heatInput
  },
  shield: {
    id: 'shield',
    label: 'Radiation Shield',
    note: 'Protects the bus and payload from reactor-facing radiation.',
    purpose: 'Reduces radiation exposure toward the spacecraft bus and payload.',
    placementRationale:
      'Placed directly between the reactor and the downstream spacecraft systems.',
    realismNote:
      'Shield direction and placement matter more than decorative shape.',
    colorMeaning:
      'Amber-gold mass indicates protective shielding rather than active machinery.',
    relatedEnergyFlow:
      'Separates the thermal source from downstream spacecraft systems.',
    position: [-20.6, 0, 0],
    focusTarget: [-20.6, 2.1, 0],
    leaderTarget: [-20.6, 2.1, 0],
    labelAnchor: [-20.5, 4.35, 0],
    cameraPreset: 'shieldClose',
    categoryColor: colors.shieldPrimary
  },
  braytonPowerUnit: {
    id: 'braytonPowerUnit',
    label: 'Closed Brayton Power Unit',
    note: 'Compact compressor, turbine, alternator, and heat exchanger cluster.',
    purpose:
      'Converts reactor heat into electric power using a closed working-fluid loop.',
    placementRationale:
      'Mounted close to both the reactor-side heat input and the radiator manifolds to shorten thermal interfaces.',
    realismNote:
      'The Brayton unit is a compact machinery cluster, not a giant engine.',
    colorMeaning:
      'Green-gray machinery indicates conversion hardware between reactor heat and electric output.',
    relatedEnergyFlow:
      'Accepts reactor heat, spins the alternator, and rejects the remaining waste heat to the radiators.',
    position: [-15.9, 0.25, 0],
    focusTarget: [-15.5, 1.75, 0],
    leaderTarget: [-15.5, 1.75, 0],
    labelAnchor: [-15.2, 4.85, 0],
    cameraPreset: 'braytonUnitClose',
    categoryColor: colors.braytonAccent
  },
  radiators: {
    id: 'radiators',
    label: 'Heat Rejection Radiators',
    note: 'Large panels reject unused thermal energy to space.',
    purpose: 'Reject unused thermal energy to space.',
    placementRationale:
      'Connected directly to the power-conversion section because waste heat must be dumped continuously.',
    realismNote:
      'Radiators dominate geometry because space has no air or water for cooling.',
    colorMeaning:
      'Blue-violet surfaces indicate the cold-side rejection hardware rather than solar arrays.',
    relatedEnergyFlow:
      'Receives waste heat from the Brayton loop and returns cooled working fluid.',
    position: [-8.2, 0.15, 0],
    focusTarget: [-8.2, 5.9, 3.1],
    leaderTarget: [-8.2, 5.9, 3.1],
    labelAnchor: [-8.4, 8.9, 0],
    cameraPreset: 'radiatorOverview',
    categoryColor: colors.workingFluidCold
  },
  separationBoom: {
    id: 'separationBoom',
    label: 'Separation Boom',
    note: 'Distance reduces radiation and thermal load on sensitive systems.',
    purpose:
      'Creates distance between the reactor/power section and the spacecraft bus.',
    placementRationale:
      'Distance reduces radiation and thermal load on sensitive systems.',
    realismNote:
      'A sparse truss is more plausible than a solid fantasy hull.',
    colorMeaning:
      'Gray structure marks a lightweight truss rather than a pressurized fuselage.',
    relatedEnergyFlow:
      'Supports the physical separation required by the thermal and radiation design logic.',
    position: [1.4, 0, 0],
    focusTarget: [1.4, 0.75, 0],
    leaderTarget: [1.4, 0.75, 0],
    labelAnchor: [1.4, 3.05, 0],
    cameraPreset: 'boomStructureClose',
    categoryColor: colors.truss
  },
  spacecraftBus: {
    id: 'spacecraftBus',
    label: 'Spacecraft Bus',
    note: 'PMAD, avionics, communications, and service hardware cluster together here.',
    purpose:
      'Houses avionics, communications, power management, and mission electronics.',
    placementRationale:
      'Kept away from the reactor side and shielded by distance.',
    realismNote: 'Boxy equipment modules and exposed structure are realistic.',
    colorMeaning:
      'Neutral gray hardware identifies the central spacecraft equipment cluster.',
    relatedEnergyFlow:
      'Consumes conditioned electric power for avionics, communications, and control.',
    position: [11.4, 0.7, 0],
    focusTarget: [11.4, 2.55, 0],
    leaderTarget: [11.4, 2.55, 0],
    labelAnchor: [11.9, 5.25, 0],
    cameraPreset: 'busSystemsClose',
    categoryColor: colors.bus
  },
  pmad: {
    id: 'pmad',
    label: 'Power Management and Distribution',
    note: 'Routes generated electric power into conditioned spacecraft loads.',
    purpose:
      'Routes generated electric power into conditioned spacecraft loads and propulsion interfaces.',
    placementRationale:
      'Mounted with the bus electronics so conditioned power can branch to avionics, communications, and electric thrusters.',
    realismNote:
      'PMAD is power-conditioning hardware, not a decorative control room or exposed battery pack.',
    colorMeaning:
      'Pale yellow overlay routes identify electric output moving through conditioning and distribution hardware.',
    relatedEnergyFlow:
      'Receives electric output from the generator, feeds the bus, and forwards power toward the thruster end.',
    position: [13.6, 1.3, 0],
    focusTarget: [13.6, 2.35, 0],
    leaderTarget: [13.6, 2.35, 0],
    labelAnchor: [14.9, 6.2, 0.8],
    cameraPreset: 'tanksPmadClose',
    categoryColor: colors.power
  },
  propellantTanks: {
    id: 'propellantTanks',
    label: 'Propellant Tanks',
    note: 'Compact storage feeds the small electric thrusters.',
    purpose: 'Store propellant for electric thrusters.',
    placementRationale:
      'Mounted on a dedicated rack aft of the bus to keep feed paths short and explicit.',
    realismNote: 'Electric propulsion still needs propellant and plumbing.',
    colorMeaning:
      'Light metallic tanks identify stored reaction mass rather than crew volume.',
    relatedEnergyFlow:
      'Supports the propulsion end by supplying propellant to the electric thrusters.',
    position: [16.2, 0.85, 0],
    focusTarget: [16.8, 2.45, 0],
    leaderTarget: [16.8, 2.45, 0],
    labelAnchor: [17.9, 5.8, 0],
    cameraPreset: 'tanksPmadClose',
    categoryColor: colors.tank
  },
  sciencePayload: {
    id: 'sciencePayload',
    label: 'Science Payload',
    note: 'Instrumentation mounts to the bus rather than floating as a separate fuselage.',
    purpose: 'Carries instruments for mission objectives.',
    placementRationale:
      'Attached to the bus-side structure where it can stay distant from the reactor while remaining mechanically integrated.',
    realismNote:
      'Payload should be small relative to the bus and power system.',
    colorMeaning:
      'Cool light surfaces distinguish sensors and payload hardware from the structural bus.',
    relatedEnergyFlow:
      'Depends on protected placement and conditioned power from the bus-side electronics.',
    position: [15.3, 2.7, -2.4],
    focusTarget: [15.2, 3.35, -2.2],
    leaderTarget: [15.2, 3.35, -2.2],
    labelAnchor: [17.3, 6, -1.2],
    cameraPreset: 'payloadClose',
    categoryColor: colors.payload
  },
  electricThrusters: {
    id: 'electricThrusters',
    label: 'Electric Thrusters',
    note: 'Low thrust, high efficiency propulsion with a restrained visible plume.',
    purpose:
      'Provide low-thrust, high-efficiency propulsion using electric power.',
    placementRationale:
      'Mounted on a dedicated propulsion frame with explicit feed and power interfaces.',
    realismNote:
      'Electric thrusters have subtle plumes, not chemical flames.',
    colorMeaning:
      'Blue-violet plume cue indicates ionized exhaust rather than high-mass combustion.',
    relatedEnergyFlow:
      'Consumes distributed electric power and propellant at the thrust end of the vehicle.',
    position: [22.6, 0.1, 0],
    focusTarget: [22.9, 1.2, 0.6],
    leaderTarget: [22.9, 1.2, 0.6],
    labelAnchor: [23.8, 4.5, 0],
    cameraPreset: 'thrusterClusterClose',
    categoryColor: colors.plume
  }
}

export const spacecraftStructure = {
  boom: {
    segments: 7,
    spacing: 2.45,
    length: 2.2,
    nodeRadius: 0.13,
    cableClampOffsets: [-6.1, -1.2, 3.7, 8.6],
    cableRoutes: [
      [
        [-8.1, 1.3, 1.3],
        [-3.8, 1.38, 1.18],
        [0.5, 1.46, 1.08],
        [4.9, 1.5, 0.98],
        [8.7, 1.52, 0.94]
      ],
      [
        [-8.1, -1.3, -1.3],
        [-3.8, -1.36, -1.18],
        [0.5, -1.44, -1.08],
        [4.9, -1.48, -0.98],
        [8.7, -1.5, -0.94]
      ]
    ]
  },
  axialLinks: [
    { position: [-18.3, 0.95, 1.05], length: 3.5, color: '#8a927d' },
    { position: [-18.3, 0.95, -1.05], length: 3.5, color: '#8a927d' },
    { position: [-11.45, 0.65, 1.35], length: 2.9, color: '#8090a8' },
    { position: [-11.45, -0.65, -1.35], length: 2.9, color: '#8090a8' },
    { position: [-5.4, 0, 0], length: 2.3, color: '#7a8390', radius: 0.18 },
    { position: [9.2, 0.55, 0], length: 0.9, color: '#7a8390', radius: 0.18 },
    { position: [14.85, 0.55, 0], length: 2.2, color: '#7a8390', radius: 0.16 },
    { position: [19.25, 0.2, 0], length: 5.7, color: '#7a8390', radius: 0.16 }
  ],
  braces: [
    {
      position: [9.55, 1.1, 1.1],
      rotation: [0, 0, 1.02],
      length: 2.3
    },
    {
      position: [9.55, 1.1, -1.1],
      rotation: [0, 0, 1.02],
      length: 2.3
    },
    {
      position: [15.05, 1.3, 1.2],
      rotation: [0, 0, 0.88],
      length: 2.1
    },
    {
      position: [15.05, -0.1, -1.2],
      rotation: [0, 0, -0.88],
      length: 2.1
    },
    {
      position: [19.75, 0.9, 0.9],
      rotation: [0, 0, 1.0],
      length: 1.9
    },
    {
      position: [19.75, -0.45, -0.9],
      rotation: [0, 0, -1.0],
      length: 1.9
    }
  ],
  collars: [
    { position: [-6.55, 0, 0], radius: 0.42, tube: 0.08 },
    { position: [9.55, 0.55, 0], radius: 0.38, tube: 0.07 },
    { position: [14.35, 0.55, 0], radius: 0.32, tube: 0.06 },
    { position: [20.95, 0.2, 0], radius: 0.28, tube: 0.05 }
  ],
  harnessRoutes: [
    [
      [-11.6, 1.9, 1.7],
      [-7.4, 2.2, 1.5],
      [-1.4, 2.45, 1.2],
      [6.2, 2.55, 1.05],
      [13.1, 2.6, 0.9],
      [19.8, 2.1, 0.8],
      [22.8, 1.2, 0.75]
    ],
    [
      [10.4, 2.35, -1.65],
      [12.3, 3.2, -1.95],
      [14.1, 3.35, -2.15],
      [15.3, 3.15, -2.35]
    ]
  ],
  tankRack: {
    spineLength: 3.8,
    crossbeamOffset: 1.65
  },
  forwardSection: {
    boomAdapterFrame: [
      { position: [8.95, 0.55, 0], scale: [0.92, 2.35, 2.2], color: '#616b7a' },
      { position: [9.95, 0.55, 0], scale: [0.36, 3.05, 3.05], color: '#586270' }
    ],
    boomAdapterStruts: [
      { position: [9.3, 1.55, 1.25], rotation: [0.68, 0.2, 0.88], length: 2.1 },
      { position: [9.3, 1.55, -1.25], rotation: [-0.68, -0.2, 0.88], length: 2.1 },
      { position: [9.3, -0.45, 1.25], rotation: [0.68, 0.2, -0.88], length: 2.1 },
      { position: [9.3, -0.45, -1.25], rotation: [-0.68, -0.2, -0.88], length: 2.1 }
    ],
    boomJunctionBoxes: [
      { position: [10.2, 2.35, 0.95], scale: [0.55, 0.45, 0.38] },
      { position: [10.2, 2.35, -0.95], scale: [0.55, 0.45, 0.38] }
    ],
    pmadHarnessRoutes: [
      [
        [13.55, 2.72, 0.15],
        [12.7, 3.18, 0.92],
        [11.15, 2.78, 1.18]
      ],
      [
        [13.55, 2.72, -0.12],
        [14.18, 3.3, -1.05],
        [15.2, 3.42, -2.05]
      ],
      [
        [13.55, 2.72, 0.3],
        [16.35, 2.42, 0.68],
        [19.65, 1.88, 0.8],
        [21.9, 1.08, 0.86]
      ],
      [
        [21.9, 1.08, 0.86],
        [22.8, 1.08, 1.05]
      ],
      [
        [21.9, 1.08, 0.86],
        [22.8, -1.0, 1.05]
      ],
      [
        [21.9, 1.08, 0.86],
        [22.8, 1.08, -1.05]
      ],
      [
        [21.9, 1.08, 0.86],
        [22.8, -1.0, -1.05]
      ]
    ],
    pmadRack: {
      backplanePosition: [13.55, 1.02, 0],
      backplaneScale: [0.22, 2.15, 2.02],
      modules: [
        { position: [13.95, 1.95, 0.92], scale: [0.84, 0.34, 0.48] },
        { position: [14.02, 1.18, 0], scale: [0.92, 0.54, 0.66] },
        { position: [13.95, 0.42, -0.92], scale: [0.78, 0.34, 0.48] }
      ],
      connectorRoutes: [
        [
          [13.98, 1.92, 0.92],
          [13.55, 2.28, 0.92],
          [13.2, 2.58, 0.72]
        ],
        [
          [14.02, 0.42, -0.92],
          [13.55, 0.12, -0.92],
          [13.18, -0.18, -0.7]
        ]
      ]
    },
    propellantFeedRoutes: [
      [
        [16.8, 1.05, 1.45],
        [18.3, 1.12, 1.22],
        [18.15, 0.52, 0],
        [20.55, 0.92, 1.08],
        [22.35, 1.0, 1.02]
      ],
      [
        [16.8, -0.02, -1.45],
        [18.3, -0.08, -1.22],
        [18.15, 0.52, 0],
        [20.55, -0.12, 1.08],
        [22.35, -0.1, 1.02]
      ],
      [
        [16.8, 1.05, 1.45],
        [18.15, 0.52, 0],
        [20.55, 0.92, -1.08],
        [22.35, 1.0, -1.02]
      ],
      [
        [16.8, -0.02, -1.45],
        [18.15, 0.52, 0],
        [20.55, -0.12, -1.08],
        [22.35, -0.1, -1.02]
      ]
    ],
    propellantManifold: {
      position: [18.15, 0.52, 0],
      scale: [0.55, 0.42, 0.82]
    },
    tankSaddles: [
      { position: [15.85, 2.1, 1.55], rotation: [0, 0, Math.PI / 2] },
      { position: [15.85, 0.45, 1.55], rotation: [0, 0, Math.PI / 2] },
      { position: [15.85, -0.45, -1.55], rotation: [0, 0, Math.PI / 2] },
      { position: [15.85, -2.1, -1.55], rotation: [0, 0, Math.PI / 2] }
    ],
    tankClampBands: [
      { position: [15.15, 2.1, 1.55], rotation: [0, 0, Math.PI / 2] },
      { position: [17.25, 2.1, 1.55], rotation: [0, 0, Math.PI / 2] },
      { position: [15.15, -0.4, -1.55], rotation: [0, 0, Math.PI / 2] },
      { position: [17.25, -0.4, -1.55], rotation: [0, 0, Math.PI / 2] }
    ],
    tankHardpoints: [
      { position: [15.15, 0.82, 1.55], scale: [0.24, 0.22, 0.32] },
      { position: [17.25, 0.82, 1.55], scale: [0.24, 0.22, 0.32] },
      { position: [15.15, 3.38, 1.55], scale: [0.24, 0.22, 0.32] },
      { position: [17.25, 3.38, 1.55], scale: [0.24, 0.22, 0.32] },
      { position: [15.15, -1.68, -1.55], scale: [0.24, 0.22, 0.32] },
      { position: [17.25, -1.68, -1.55], scale: [0.24, 0.22, 0.32] },
      { position: [15.15, 0.88, -1.55], scale: [0.24, 0.22, 0.32] },
      { position: [17.25, 0.88, -1.55], scale: [0.24, 0.22, 0.32] }
    ],
    payloadMount: {
      struts: [
        { position: [13.65, 2.78, -1.95], rotation: [0.58, 0.2, 0.48], length: 1.95 },
        { position: [14.25, 3.18, -2.48], rotation: [1.12, 0, 0], length: 1.25 }
      ],
      backboneLength: 2.3,
      boomletLength: 1.75,
      instrumentOffset: [1.55, 1.45, 0.1],
      dishOffset: [-1.4, 0.2, -1.2]
    },
    propulsionInterfaceBoxes: [
      { position: [20.9, 1.05, 0], scale: [0.7, 0.58, 0.92] },
      { position: [21.75, 0.25, 0], scale: [0.52, 0.4, 0.62] }
    ]
  },
  propulsionFrame: {
    railLength: 2.9,
    railOffset: 1.12,
    clusterRoot: {
      position: [-2.05, 0, 0],
      scale: [0.95, 1.32, 1.32]
    },
    thrusterOffsets: [
      [0.15, 1.05, 1.05],
      [0.15, -1.05, 1.05],
      [0.15, 1.05, -1.05],
      [0.15, -1.05, -1.05]
    ],
    supportBrackets: [
      { position: [-1.62, 1.08, 1.02], rotation: [0.84, 0.14, -0.92], length: 1.55 },
      { position: [-1.62, -1.08, 1.02], rotation: [-0.84, -0.14, 0.92], length: 1.55 },
      { position: [-1.62, 1.08, -1.02], rotation: [0.84, 0.14, 0.92], length: 1.55 },
      { position: [-1.62, -1.08, -1.02], rotation: [-0.84, -0.14, -0.92], length: 1.55 }
    ],
    mountPlates: [
      { position: [-0.18, 1.05, 1.05], scale: [0.12, 0.72, 0.72] },
      { position: [-0.18, -1.05, 1.05], scale: [0.12, 0.72, 0.72] },
      { position: [-0.18, 1.05, -1.05], scale: [0.12, 0.72, 0.72] },
      { position: [-0.18, -1.05, -1.05], scale: [0.12, 0.72, 0.72] }
    ],
    gimbalRings: [
      { position: [-0.35, 1.05, 1.05], radius: 0.42, tube: 0.035 },
      { position: [-0.35, -1.05, 1.05], radius: 0.42, tube: 0.035 },
      { position: [-0.35, 1.05, -1.05], radius: 0.42, tube: 0.035 },
      { position: [-0.35, -1.05, -1.05], radius: 0.42, tube: 0.035 }
    ]
  }
}

export const braytonOverlay = {
  anchor: [-15.4, 5.2, 0.9],
  stageLabels: {
    compressor: 'Compressor: P up, T up',
    heatInput: 'Qin at high pressure',
    turbine: 'Turbine: P down, T down',
    alternator: 'Alternator / Generator',
    electricOutput: 'Electric Output',
    heatRejection: 'Qout to Radiators'
  },
  stageNotes: {
    compressor: 'Compressor: raises working-fluid pressure before heating.',
    heatInput:
      'Reactor heat input: thermal energy enters the Brayton heat exchanger.',
    turbine: 'Turbine: expanding gas drives shaft power extraction.',
    alternator:
      'Alternator / generator: shaft power is converted to electrical power.',
    electricOutput: 'PMAD flow: power is conditioned and distributed forward.',
    heatRejection:
      'Waste heat: unconverted thermal energy is routed to the radiators.'
  },
  workingFluidStages: ['cold', 'compressed', 'hot', 'expanded', 'cooled'],
  stageColors: {
    cold: colors.workingFluidCold,
    compressed: colors.workingFluidWarm,
    hot: colors.workingFluidHot,
    expanded: colors.workingFluidWarm,
    cooled: colors.workingFluidCold
  },
  loopRoute: [
    [-1.7, -1.1, 0],
    [-1.7, 1.05, 0],
    [0.15, 1.05, 0],
    [1.65, 1.05, 0],
    [1.65, -1.05, 0],
    [0.15, -1.05, 0],
    [-1.7, -1.1, 0]
  ],
  loopSegments: [
    { key: 'cold', labelKey: 'compressor', range: [0, 0.22] },
    { key: 'compressed', labelKey: 'compressor', range: [0.22, 0.42] },
    { key: 'hot', labelKey: 'heatInput', range: [0.42, 0.62] },
    { key: 'expanded', labelKey: 'turbine', range: [0.62, 0.8] },
    { key: 'cooled', labelKey: 'heatRejection', range: [0.8, 1] }
  ],
  labelAnchors: {
    compressor: [-2.7, -0.1, 0],
    heatInput: [0.05, 1.95, 0],
    turbine: [2.7, 0.15, 0],
    alternator: [2.95, -0.95, 0],
    electricOutput: [4.3, -0.2, 0],
    heatRejection: [0.2, -1.95, 0]
  },
  shaftLine: [
    [-1.5, -0.18, -0.05],
    [1.75, -0.18, -0.05],
    [2.7, -0.68, -0.05]
  ],
  heatInputPath: [
    [-22.7, 0.7, 0],
    [-20.2, 1.35, 0.15],
    [-17.9, 3.55, 0.45],
    [-15.45, 4.55, 0.72]
  ],
  powerRoutes: {
    generatorToPmad: [
      [-12.8, 4.2, 0.7],
      [-9.7, 4.2, 0.78],
      [-2, 4.12, 0.62],
      [8.1, 4.05, 0.35],
      [13.55, 2.72, 0]
    ],
    pmadToBus: [
      [13.55, 2.72, 0],
      [12.6, 2.1, 0],
      [11.75, 1.82, 0]
    ],
    pmadToThrusters: [
      [13.55, 2.72, 0],
      [16.7, 2.25, 0.28],
      [20.1, 1.7, 0.55],
      [23.4, 0.98, 0.76]
    ]
  },
  heatRoutes: {
    toRadiators: [
      [
        [-13.35, 0.95, 0.95],
        [-11.8, 1.45, 2.15],
        [-10.25, 3.3, 4.55],
        [-8.1, 5.6, 7.45]
      ],
      [
        [-13.35, 0.95, -0.95],
        [-11.8, -0.2, -2.15],
        [-10.25, -2.75, -4.55],
        [-8.1, -5.45, -7.45]
      ]
    ],
    radiatorReject: [
      [
        [-8.1, 5.6, 7.45],
        [-10.6, 6.65, 9.1],
        [-14.2, 7.3, 11]
      ],
      [
        [-8.1, -5.45, -7.45],
        [-10.6, -6.45, -9.1],
        [-14.2, -7.1, -11]
      ]
    ]
  },
  particleCounts: {
    brayton: 12,
    power: 4,
    heat: 6
  },
  speedScale: {
    brayton: 0.17,
    power: 0.24,
    heat: 0.12,
    glow: 0.8,
    plume: 1
  }
}
