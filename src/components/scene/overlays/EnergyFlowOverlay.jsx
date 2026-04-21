import { Line } from '@react-three/drei'
import FlowParticles from './FlowParticles'
import { braytonOverlay, colors } from '../../../data/spacecraftConfig'

function RouteLine({ color, lineWidth = 1.1, opacity = 0.72, points, visible }) {
  if (!visible) {
    return null
  }

  return (
    <Line
      color={color}
      lineWidth={lineWidth}
      opacity={opacity}
      points={points}
      transparent
    />
  )
}

export default function EnergyFlowOverlay({
  overlayTreatment,
  sceneMode,
  viewerState
}) {
  const showPowerRoutes =
    viewerState.showPowerFlow && overlayTreatment.powerFlow.visible
  const showHeatRoutes =
    viewerState.showHeatArrows &&
    (overlayTreatment.heatFlow.visible || overlayTreatment.thermalPaths.visible)
  const heatRouteColor =
    sceneMode === 'thermal' ? colors.heatInput : colors.heatRoute
  const rejectRouteColor =
    sceneMode === 'thermal' ? '#7dc8ff' : colors.workingFluidCold
  const powerIntensity = overlayTreatment.powerFlow.intensity
  const heatIntensity = Math.max(
    overlayTreatment.heatFlow.intensity,
    overlayTreatment.thermalPaths.intensity
  )
  const particleScale = overlayTreatment.particles.scale
  const lineWidth = sceneMode === 'thermal' ? 1.5 * heatIntensity : 1.1 * Math.max(powerIntensity, heatIntensity)

  return (
    <group>
      <RouteLine
        color={colors.power}
        points={braytonOverlay.powerRoutes.generatorToPmad}
        visible={showPowerRoutes}
        lineWidth={lineWidth}
        opacity={0.72 * powerIntensity}
      />
      <RouteLine
        color={colors.power}
        points={braytonOverlay.powerRoutes.pmadToBus}
        visible={showPowerRoutes}
        lineWidth={lineWidth}
        opacity={0.72 * powerIntensity}
      />
      <RouteLine
        color={colors.power}
        points={braytonOverlay.powerRoutes.pmadToThrusters}
        visible={showPowerRoutes}
        lineWidth={lineWidth}
        opacity={0.72 * powerIntensity}
      />

      {showPowerRoutes ? (
        <>
          <FlowParticles
            color={colors.electricPulse}
            count={braytonOverlay.particleCounts.power}
            paused={viewerState.paused}
            radius={0.075 * particleScale}
            route={braytonOverlay.powerRoutes.generatorToPmad}
            speed={viewerState.animationSpeed * braytonOverlay.speedScale.power}
            visible={showPowerRoutes}
          />
          <FlowParticles
            color={colors.electricPulse}
            count={2}
            paused={viewerState.paused}
            radius={0.07 * particleScale}
            route={braytonOverlay.powerRoutes.pmadToBus}
            speed={viewerState.animationSpeed * braytonOverlay.speedScale.power}
            startOffset={0.18}
            visible={showPowerRoutes}
          />
          <FlowParticles
            color={colors.electricPulse}
            count={3}
            paused={viewerState.paused}
            radius={0.07 * particleScale}
            route={braytonOverlay.powerRoutes.pmadToThrusters}
            speed={viewerState.animationSpeed * braytonOverlay.speedScale.power}
            startOffset={0.35}
            visible={showPowerRoutes}
          />
        </>
      ) : null}

      {braytonOverlay.heatRoutes.toRadiators.map((route, index) => (
        <RouteLine
          color={heatRouteColor}
          key={`heat-feed-${index}`}
          lineWidth={lineWidth}
          opacity={0.72 * heatIntensity}
          points={route}
          visible={showHeatRoutes}
        />
      ))}

      {braytonOverlay.heatRoutes.radiatorReject.map((route, index) => (
        <RouteLine
          color={rejectRouteColor}
          key={`heat-reject-${index}`}
          lineWidth={lineWidth}
          opacity={0.72 * heatIntensity}
          points={route}
          visible={showHeatRoutes}
        />
      ))}

      {showHeatRoutes
        ? braytonOverlay.heatRoutes.toRadiators.map((route, index) => (
            <FlowParticles
              color={colors.heatInput}
              count={sceneMode === 'thermal' ? 4 : 3}
              key={`heat-pulse-${index}`}
              paused={viewerState.paused}
              radius={0.085 * particleScale}
              route={route}
              speed={viewerState.animationSpeed * braytonOverlay.speedScale.heat}
              startOffset={index * 0.22}
              visible={showHeatRoutes}
            />
          ))
        : null}

      {showHeatRoutes
        ? braytonOverlay.heatRoutes.radiatorReject.map((route, index) => (
            <FlowParticles
              color={colors.workingFluidCold}
              count={sceneMode === 'thermal' ? 4 : 3}
              key={`cool-pulse-${index}`}
              paused={viewerState.paused}
              radius={0.07 * particleScale}
              route={route}
              speed={viewerState.animationSpeed * braytonOverlay.speedScale.heat}
              startOffset={0.42 + index * 0.18}
              visible={showHeatRoutes}
            />
          ))
        : null}
    </group>
  )
}
