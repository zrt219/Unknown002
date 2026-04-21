export const thermalModeConfig = {
  key: 'thermal',
  label: 'Thermal View',
  description: 'Heat-source intensity, radiator dominance, and protected-zone logic.',
  defaultEnvironment: 'thermal-analysis',
  defaultCameraPreset: 'thermalStory',
  managedState: {
    showLabels: true,
    showLeaderLines: false,
    showBraytonOverlay: false,
    showWorkingFluidParticles: false,
    showHeatArrows: true,
    showPowerFlow: false,
    showShieldCone: true,
    showPlume: false,
    showGrid: false,
    showThermalMaterials: true,
    showRadiatorEmphasis: true
  },
  uiSections: {
    viewerControls: true,
    subsystemDirectory: true,
    subsystemCard: true,
    legend: true,
    energyInset: false,
    thermalNotes: true,
    status: true,
    accessibilityNotes: true
  },
  overlays: {
    brayton: false,
    powerFlow: false,
    heatFlow: true,
    thermalPaths: true,
    thermalMaterials: true,
    radiatorEmphasis: true
  }
}
