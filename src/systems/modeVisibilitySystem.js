import { colors } from '../data/spacecraftConfig'
import { sceneModeConfig } from '../modes/sceneModeConfig'

const TOGGLE_LIBRARY = {
  showLabels: { key: 'showLabels', label: 'Labels' },
  showLeaderLines: { key: 'showLeaderLines', label: 'Leader Lines' },
  showShieldCone: { key: 'showShieldCone', label: 'Shielded Zone' },
  showGrid: { key: 'showGrid', label: 'Grid / Axis Helper' },
  showBraytonOverlay: { key: 'showBraytonOverlay', label: 'Brayton Overlay' },
  showWorkingFluidParticles: {
    key: 'showWorkingFluidParticles',
    label: 'Working-Fluid Particles',
    dependsOn: 'showBraytonOverlay'
  },
  showPowerFlow: { key: 'showPowerFlow', label: 'Electric Power Flow' },
  showHeatArrows: { key: 'showHeatArrows', label: 'Heat Path Overlay' },
  showPlume: { key: 'showPlume', label: 'Thruster Plume' },
  showThermalMaterials: {
    key: 'showThermalMaterials',
    label: 'Thermal Materials'
  },
  showRadiatorEmphasis: {
    key: 'showRadiatorEmphasis',
    label: 'Radiator Emphasis'
  },
  paused: { key: 'paused', label: 'Pause Animation', emphasized: true }
}

const CONTROL_GROUPS = {
  clean: [],
  engineering: [
    {
      group: 'Structure & Labels',
      items: [
        TOGGLE_LIBRARY.showLabels,
        TOGGLE_LIBRARY.showLeaderLines,
        TOGGLE_LIBRARY.showShieldCone,
        TOGGLE_LIBRARY.showGrid
      ]
    }
  ],
  energy: [
    {
      group: 'Energy Flow',
      items: [
        TOGGLE_LIBRARY.showBraytonOverlay,
        TOGGLE_LIBRARY.showWorkingFluidParticles,
        TOGGLE_LIBRARY.showPowerFlow,
        TOGGLE_LIBRARY.showHeatArrows,
        TOGGLE_LIBRARY.showPlume,
        TOGGLE_LIBRARY.paused
      ]
    }
  ],
  thermal: [
    {
      group: 'Thermal Analysis',
      items: [
        TOGGLE_LIBRARY.showThermalMaterials,
        TOGGLE_LIBRARY.showRadiatorEmphasis,
        TOGGLE_LIBRARY.showHeatArrows,
        TOGGLE_LIBRARY.showShieldCone,
        TOGGLE_LIBRARY.paused
      ]
    }
  ]
}

const LEGEND_LIBRARY = {
  engineering: {
    title: 'Structure Legend',
    items: [
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
        meaning: 'Protective mass that interrupts line-of-sight from reactor to bus.'
      },
      {
        key: 'radiators',
        label: 'Radiators',
        color: colors.radiatorEdge,
        meaning: 'Large rejection hardware required by the thermal architecture.'
      },
      {
        key: 'bus',
        label: 'Bus & Payload Side',
        color: colors.bus,
        meaning: 'Protected electronics and instruments kept forward of the shield.'
      }
    ]
  },
  energy: {
    title: 'Energy Legend',
    items: [
      {
        key: 'thermalInput',
        label: 'Thermal Input',
        color: colors.heatInput,
        meaning: 'Reactor heat entering the Brayton conversion chain.'
      },
      {
        key: 'coldLoop',
        label: 'Cold Working Fluid',
        color: colors.workingFluidCold,
        meaning: 'Cooled return path after rejection through the radiator side.'
      },
      {
        key: 'warmLoop',
        label: 'Compressed / Warming Fluid',
        color: colors.workingFluidWarm,
        meaning: 'Working fluid after compression and before turbine expansion.'
      },
      {
        key: 'electricPower',
        label: 'Electric Power',
        color: colors.power,
        meaning: 'Generator output routed through PMAD to bus loads and thrusters.'
      },
      {
        key: 'plume',
        label: 'Propulsion Output',
        color: colors.plume,
        meaning: 'Subtle electric-thruster exhaust, not a chemical flame.'
      }
    ]
  },
  thermal: {
    title: 'Thermal Legend',
    items: [
      {
        key: 'reactor',
        label: 'Hot Source',
        color: colors.heatInput,
        meaning: 'Compact reactor region and high-temperature thermal input.'
      },
      {
        key: 'conversion',
        label: 'Conversion Gradient',
        color: colors.workingFluidWarm,
        meaning: 'Brayton section where heat is partially converted into useful power.'
      },
      {
        key: 'radiatorReject',
        label: 'Rejected Heat',
        color: colors.workingFluidCold,
        meaning: 'Waste-heat path into the dominant radiator surfaces.'
      },
      {
        key: 'protected',
        label: 'Protected Zone',
        color: colors.shieldPrimary,
        meaning: 'Shielded downstream region for the bus, payload, and mission hardware.'
      }
    ]
  }
}

export function getToggleDefinitionsForMode(sceneMode) {
  return CONTROL_GROUPS[sceneMode] ?? []
}

export function getLegendForMode(sceneMode) {
  if (sceneMode === 'clean') {
    return null
  }

  return LEGEND_LIBRARY[sceneMode] ?? LEGEND_LIBRARY.engineering
}

export function getVisibleUiSections(sceneMode) {
  return sceneModeConfig[sceneMode]?.uiSections ?? sceneModeConfig.clean.uiSections
}
