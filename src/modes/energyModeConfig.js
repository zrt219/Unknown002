export const energyModeConfig = {
  key: 'energy',
  label: 'Energy View',
  description: 'Reactor heat, Brayton conversion, PMAD distribution, and propulsion use.',
  defaultEnvironment: 'deep-space',
  defaultCameraPreset: 'energyFlowOverview',
  managedState: {
    showLabels: true,
    showLeaderLines: false,
    showBraytonOverlay: true,
    showWorkingFluidParticles: true,
    showHeatArrows: true,
    showPowerFlow: true,
    showShieldCone: false,
    showPlume: true,
    showGrid: false,
    showThermalMaterials: false,
    showRadiatorEmphasis: false
  },
  uiSections: {
    viewerControls: true,
    subsystemDirectory: true,
    subsystemCard: true,
    legend: true,
    energyInset: true,
    thermalNotes: false,
    status: true,
    accessibilityNotes: true
  },
  overlays: {
    brayton: true,
    powerFlow: true,
    heatFlow: true,
    thermalPaths: false,
    thermalMaterials: false,
    radiatorEmphasis: false
  }
}
