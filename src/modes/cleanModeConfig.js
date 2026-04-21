export const cleanModeConfig = {
  key: 'clean',
  label: 'Clean View',
  description: 'Presentation-first hero framing with minimal engineering clutter.',
  defaultEnvironment: 'earth-orbit',
  defaultCameraPreset: 'heroTechnical',
  managedState: {
    showLabels: false,
    showLeaderLines: false,
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
    viewerControls: false,
    subsystemDirectory: false,
    subsystemCard: false,
    legend: false,
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
