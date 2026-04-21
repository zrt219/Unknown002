const ENERGY_VISIBLE = [
  'reactor',
  'braytonPowerUnit',
  'pmad',
  'radiators',
  'electricThrusters'
]

const THERMAL_VISIBLE = [
  'reactor',
  'shield',
  'braytonPowerUnit',
  'radiators',
  'separationBoom',
  'spacecraftBus'
]

const REDUCED_REVIEW = [
  'reactor',
  'shield',
  'braytonPowerUnit',
  'radiators',
  'separationBoom',
  'spacecraftBus',
  'pmad',
  'propellantTanks',
  'electricThrusters'
]

const CAPTURE_BY_SCENE = {
  clean: [],
  engineering: REDUCED_REVIEW,
  energy: ENERGY_VISIBLE,
  thermal: THERMAL_VISIBLE
}

function buildPresentation(visibleSubsystemIds, detail, showLeaderLines, selected) {
  if (selected && !visibleSubsystemIds.includes(selected)) {
    return {
      visibleSubsystemIds: [...visibleSubsystemIds, selected],
      detail,
      showLeaderLines
    }
  }

  return {
    visibleSubsystemIds,
    detail,
    showLeaderLines
  }
}

export function getAnnotationPresentation(sceneMode, viewerState, subsystems) {
  if (!viewerState.showLabels || viewerState.labelProfile === 'none') {
    return {
      visibleSubsystemIds: [],
      detail: 'hidden',
      showLeaderLines: false
    }
  }

  const selected = viewerState.selectedSubsystem

  switch (viewerState.labelProfile) {
    case 'full-engineering':
      return buildPresentation(
        Object.keys(subsystems),
        'engineering',
        viewerState.showLeaderLines,
        selected
      )
    case 'reduced-review':
      return buildPresentation(
        REDUCED_REVIEW,
        'review',
        viewerState.showLeaderLines,
        selected
      )
    case 'capture':
      return buildPresentation(
        CAPTURE_BY_SCENE[sceneMode] ?? CAPTURE_BY_SCENE.engineering,
        'capture',
        false,
        selected
      )
    default:
      break
  }

  switch (sceneMode) {
    case 'clean':
      return buildPresentation(selected ? [selected] : [], 'clean', false, null)
    case 'energy':
      return buildPresentation(
        ENERGY_VISIBLE,
        'energy',
        viewerState.showLeaderLines,
        selected
      )
    case 'thermal':
      return buildPresentation(
        THERMAL_VISIBLE,
        'thermal',
        viewerState.showLeaderLines,
        selected
      )
    case 'engineering':
    default:
      return buildPresentation(
        Object.keys(subsystems),
        'engineering',
        viewerState.showLeaderLines,
        selected
      )
  }
}

function buildSections(sceneMode, subsystem) {
  switch (sceneMode) {
    case 'energy':
      return [
        { label: 'Energy Role', value: subsystem.energyRole ?? subsystem.relatedEnergyFlow },
        { label: 'Purpose', value: subsystem.purpose },
        {
          label: 'Functional Handoff',
          value:
            subsystem.relatedSystems ??
            'Connects to neighboring source, conversion, distribution, and load hardware.'
        }
      ]
    case 'thermal':
      return [
        { label: 'Thermal Role', value: subsystem.thermalRole ?? subsystem.note },
        { label: 'Placement Logic', value: subsystem.placementRationale },
        { label: 'Protected-Zone Meaning', value: subsystem.realismNote }
      ]
    case 'clean':
      return [
        { label: 'Role', value: subsystem.note }
      ]
    case 'engineering':
    default:
      return [
        { label: 'Purpose', value: subsystem.purpose },
        { label: 'Placement', value: subsystem.placementRationale },
        { label: 'Realism Note', value: subsystem.realismNote },
        {
          label: 'Related Systems',
          value: subsystem.relatedSystems ?? subsystem.relatedEnergyFlow
        }
      ]
  }
}

export function getSubsystemCardData(sceneMode, subsystem) {
  if (!subsystem) {
    return {
      title: 'Overview',
      summary:
        sceneMode === 'clean'
          ? 'Use camera presets or switch to a technical mode to inspect specific spacecraft systems.'
          : 'Select a subsystem from the scene or directory to review engineering context.',
      sections: []
    }
  }

  const summaryByMode = {
    clean: subsystem.note,
    engineering: subsystem.note,
    energy: subsystem.energyRole ?? subsystem.relatedEnergyFlow,
    thermal: subsystem.thermalRole ?? subsystem.note
  }

  return {
    title: subsystem.label,
    summary: summaryByMode[sceneMode] ?? subsystem.note,
    sections: buildSections(sceneMode, subsystem)
  }
}
