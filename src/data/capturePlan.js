export const captureProfiles = {
  cleanHero: {
    key: 'cleanHero',
    label: 'Clean Hero',
    sceneMode: 'clean',
    presentationMode: 'beautyTechnical',
    environmentMode: 'earth-orbit',
    cameraPreset: 'heroTechnical',
    labelProfile: 'none',
    paused: true,
    clearSelection: true,
    hideHudForCapture: false
  },
  engineeringAnnotated: {
    key: 'engineeringAnnotated',
    label: 'Engineering Annotated',
    sceneMode: 'engineering',
    presentationMode: 'review',
    environmentMode: 'deep-space',
    cameraPreset: 'overviewThreeQuarter',
    labelProfile: 'reduced-review',
    paused: true,
    clearSelection: true,
    hideHudForCapture: false
  },
  energyExplainer: {
    key: 'energyExplainer',
    label: 'Energy Explainer',
    sceneMode: 'energy',
    presentationMode: 'capture',
    environmentMode: 'deep-space',
    cameraPreset: 'energyFlowOverview',
    labelProfile: 'capture',
    paused: true,
    clearSelection: true,
    hideHudForCapture: false,
    overrides: {
      showBraytonOverlay: true,
      showWorkingFluidParticles: false,
      showPowerFlow: true,
      showHeatArrows: true
    }
  },
  thermalExplainer: {
    key: 'thermalExplainer',
    label: 'Thermal Explainer',
    sceneMode: 'thermal',
    presentationMode: 'diagram',
    environmentMode: 'thermal-analysis',
    cameraPreset: 'thermalStory',
    labelProfile: 'capture',
    paused: true,
    clearSelection: true,
    hideHudForCapture: false,
    overrides: {
      showThermalMaterials: true,
      showRadiatorEmphasis: true,
      showHeatArrows: true,
      showShieldCone: true
    }
  }
}

export const caseStudyCapturePlan = [
  {
    key: 'full-overview-side',
    title: 'Full Overview Side',
    filename: 'unknown02-overview-side.png',
    recommendedSceneMode: 'clean',
    recommendedPresentationMode: 'beautyTechnical',
    recommendedEnvironment: 'earth-orbit',
    recommendedCameraPreset: 'overviewSide',
    labelProfile: 'none',
    overlays: 'No labels, no legend, no overlays.',
    caption:
      'Side-profile hero view of UNKNOWN02 showing the reactor-to-thruster architecture in one clean silhouette.'
  },
  {
    key: 'full-overview-three-quarter',
    title: 'Full Overview 3/4',
    filename: 'unknown02-overview-34.png',
    recommendedSceneMode: 'clean',
    recommendedPresentationMode: 'beautyTechnical',
    recommendedEnvironment: 'earth-orbit',
    recommendedCameraPreset: 'overviewThreeQuarter',
    labelProfile: 'none',
    overlays: 'No labels, no legend, no overlays.',
    caption:
      'Three-quarter presentation view for README, portfolio, and review-deck hero use.'
  },
  {
    key: 'reactor-shield-closeup',
    title: 'Reactor + Shield Close-Up',
    filename: 'unknown02-reactor-shield-close.png',
    recommendedSceneMode: 'engineering',
    recommendedPresentationMode: 'review',
    recommendedEnvironment: 'deep-space',
    recommendedCameraPreset: 'reactorClose',
    labelProfile: 'reduced-review',
    overlays: 'Reduced review labels, leader lines on, no energy overlays.',
    caption:
      'Close view explaining the compact thermal source and the directional shielding logic.'
  },
  {
    key: 'brayton-power-unit-closeup',
    title: 'Brayton Power Unit Close-Up',
    filename: 'unknown02-brayton-close.png',
    recommendedSceneMode: 'energy',
    recommendedPresentationMode: 'capture',
    recommendedEnvironment: 'deep-space',
    recommendedCameraPreset: 'braytonUnitClose',
    labelProfile: 'capture',
    overlays:
      'Brayton overlay on, working-fluid particles off for still capture, heat path on, power flow off.',
    caption:
      'Power-conversion machinery close-up showing the closed Brayton loop as the bridge between reactor heat and electrical output.'
  },
  {
    key: 'radiator-thermal-view',
    title: 'Radiator Thermal View',
    filename: 'unknown02-radiator-thermal.png',
    recommendedSceneMode: 'thermal',
    recommendedPresentationMode: 'diagram',
    recommendedEnvironment: 'thermal-analysis',
    recommendedCameraPreset: 'thermalStory',
    labelProfile: 'capture',
    overlays:
      'Thermal materials on, radiator emphasis on, heat path on, shielded zone optional.',
    caption:
      'Thermal-first capture showing that radiator area and rejection path are first-order drivers of the vehicle form.'
  },
  {
    key: 'boom-structural-detail',
    title: 'Boom Structural Detail',
    filename: 'unknown02-boom-detail.png',
    recommendedSceneMode: 'engineering',
    recommendedPresentationMode: 'review',
    recommendedEnvironment: 'deep-space',
    recommendedCameraPreset: 'boomStructureClose',
    labelProfile: 'reduced-review',
    overlays: 'Reduced review labels, leader lines on, no flow overlays.',
    caption:
      'Structural detail of the long truss and why separation distance matters for thermal and radiation architecture.'
  },
  {
    key: 'bus-pmad-tanks-view',
    title: 'Bus + PMAD + Tanks View',
    filename: 'unknown02-bus-pmad-tanks.png',
    recommendedSceneMode: 'engineering',
    recommendedPresentationMode: 'review',
    recommendedEnvironment: 'deep-space',
    recommendedCameraPreset: 'tanksPmadClose',
    labelProfile: 'reduced-review',
    overlays: 'Reduced review labels, leader lines on, no Brayton overlay.',
    caption:
      'Forward-section packaging view showing PMAD grouping, tank rack logic, and bus-side systems integration.'
  },
  {
    key: 'electric-propulsion-closeup',
    title: 'Electric Propulsion Close-Up',
    filename: 'unknown02-electric-propulsion-close.png',
    recommendedSceneMode: 'energy',
    recommendedPresentationMode: 'capture',
    recommendedEnvironment: 'deep-space',
    recommendedCameraPreset: 'thrusterClusterClose',
    labelProfile: 'capture',
    overlays:
      'Power flow on, plume on, labels reduced, heat path off.',
    caption:
      'Electric propulsion close-up showing the restrained thruster cluster, electrical use, and non-chemical plume logic.'
  },
  {
    key: 'energy-flow-composite',
    title: 'Energy Flow Composite View',
    filename: 'unknown02-energy-flow-composite.png',
    recommendedSceneMode: 'energy',
    recommendedPresentationMode: 'diagram',
    recommendedEnvironment: 'deep-space',
    recommendedCameraPreset: 'energyFlowOverview',
    labelProfile: 'capture',
    overlays:
      'Brayton overlay on, power flow on, heat path on, labels limited to energy-visible systems.',
    caption:
      'Composite systems view following reactor heat through Brayton conversion, PMAD distribution, propulsion use, and heat rejection.'
  },
  {
    key: 'clean-beauty-technical',
    title: 'Clean Beauty Technical View',
    filename: 'unknown02-clean-beauty-technical.png',
    recommendedSceneMode: 'clean',
    recommendedPresentationMode: 'beautyTechnical',
    recommendedEnvironment: 'earth-orbit',
    recommendedCameraPreset: 'cleanSidePresentation',
    labelProfile: 'none',
    overlays: 'No labels, no legend, no overlays.',
    caption:
      'Presentation-grade render for the case-study header or review-deck cover slide, with silhouette and realism prioritized over annotation.'
  }
]
