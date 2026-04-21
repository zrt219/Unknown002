export const engineeringModeConfig = {
  key: 'engineering',
  label: 'Engineering View',
  description: 'Subsystem layout, structure, interfaces, and placement logic.',
  defaultEnvironment: 'deep-space',
  defaultCameraPreset: 'overviewThreeQuarter',
  managedState: {
    showLabels: true,
    showLeaderLines: true,
    showBraytonOverlay: false,
    showWorkingFluidParticles: false,
    showHeatArrows: false,
    showPowerFlow: false,
    showShieldCone: false,
    showPlume: false,
    showGrid: false,
    showThermalMaterials: false,
    showRadiatorEmphasis: false
  },
  uiSections: {
    viewerControls: true,
    subsystemDirectory: true,
    subsystemCard: true,
    legend: true,
    energyInset: false,
    thermalNotes: false,
    status: true,
    accessibilityNotes: true
  },
  overlays: {
    brayton: false,
    powerFlow: false,
    heatFlow: false,
    thermalPaths: false,
    thermalMaterials: false,
    radiatorEmphasis: false
  }
}
