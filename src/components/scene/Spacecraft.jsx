import { useLayoutEffect, useRef } from 'react'
import ReactorSubsystem from './subsystems/ReactorSubsystem'
import RadiationShield from './subsystems/RadiationShield'
import BraytonPowerUnit from './subsystems/BraytonPowerUnit'
import Radiators from './subsystems/Radiators'
import SeparationBoom from './subsystems/SeparationBoom'
import SpacecraftBus from './subsystems/SpacecraftBus'
import PropellantTanks from './subsystems/PropellantTanks'
import SciencePayload from './subsystems/SciencePayload'
import ElectricPropulsion from './subsystems/ElectricPropulsion'
import IntegratedStructure from './subsystems/IntegratedStructure'
import { applyMaterialProfile } from '../../systems/modeMaterialSystem'

export default function Spacecraft({
  animationPresentation,
  onSelectSubsystem,
  sceneMode,
  viewerState
}) {
  const rootRef = useRef(null)
  const materialSceneMode =
    sceneMode === 'thermal' && !viewerState.showThermalMaterials
      ? 'engineering'
      : sceneMode

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return
    }

    applyMaterialProfile(
      rootRef.current,
      materialSceneMode,
      viewerState.selectedSubsystem
    )
  }, [
    materialSceneMode,
    viewerState.selectedSubsystem,
    viewerState.showRadiatorEmphasis,
    viewerState.showThermalMaterials
  ])

  return (
    <group ref={rootRef}>
      <ReactorSubsystem
        animationSpeed={viewerState.animationSpeed}
        isSelected={viewerState.selectedSubsystem === 'reactor'}
        onSelect={onSelectSubsystem}
        paused={viewerState.paused}
        pulseWeight={animationPresentation.reactorPulseWeight}
      />
      <RadiationShield
        isSelected={viewerState.selectedSubsystem === 'shield'}
        onSelect={onSelectSubsystem}
        showShieldCone={viewerState.showShieldCone}
      />
      <BraytonPowerUnit
        isSelected={viewerState.selectedSubsystem === 'braytonPowerUnit'}
        onSelect={onSelectSubsystem}
      />
      <Radiators
        isSelected={viewerState.selectedSubsystem === 'radiators'}
        onSelect={onSelectSubsystem}
        showRadiatorEmphasis={viewerState.showRadiatorEmphasis}
      />
      <IntegratedStructure />
      <SeparationBoom
        isSelected={viewerState.selectedSubsystem === 'separationBoom'}
        onSelect={onSelectSubsystem}
      />
      <SpacecraftBus
        isSelected={viewerState.selectedSubsystem === 'spacecraftBus'}
        onSelect={onSelectSubsystem}
        selectedSubsystem={viewerState.selectedSubsystem}
      />
      <PropellantTanks
        isSelected={viewerState.selectedSubsystem === 'propellantTanks'}
        onSelect={onSelectSubsystem}
      />
      <SciencePayload
        isSelected={viewerState.selectedSubsystem === 'sciencePayload'}
        onSelect={onSelectSubsystem}
      />
      <ElectricPropulsion
        animationSpeed={viewerState.animationSpeed}
        isSelected={viewerState.selectedSubsystem === 'electricThrusters'}
        onSelect={onSelectSubsystem}
        paused={viewerState.paused}
        showPlume={viewerState.showPlume}
      />
    </group>
  )
}
