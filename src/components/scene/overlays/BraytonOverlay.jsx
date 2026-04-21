import { Html, Line } from '@react-three/drei'
import { useMemo } from 'react'
import FlowParticles, { createCurve } from './FlowParticles'
import { braytonOverlay, colors } from '../../../data/spacecraftConfig'

function offsetPoint(point) {
  return [
    point[0] + braytonOverlay.anchor[0],
    point[1] + braytonOverlay.anchor[1],
    point[2] + braytonOverlay.anchor[2]
  ]
}

function BraytonLabel({ note, text }) {
  return (
    <div className="overlay-label">
      <strong>{text}</strong>
      <span>{note}</span>
    </div>
  )
}

function SegmentLine({ color, intensity, points }) {
  return (
    <Line
      color={color}
      lineWidth={1.4 * intensity}
      opacity={0.84 * intensity}
      points={points}
      transparent
    />
  )
}

export default function BraytonOverlay({
  overlayTreatment,
  sceneMode,
  showWorkingFluidParticles,
  viewerState
}) {
  const loopCurve = useMemo(() => {
    const worldRoute = braytonOverlay.loopRoute.map(offsetPoint)

    return createCurve(worldRoute, true)
  }, [])

  const shaftLine = useMemo(
    () => braytonOverlay.shaftLine.map(offsetPoint),
    []
  )

  const segmentLines = useMemo(
    () =>
      braytonOverlay.loopSegments.map((segment) => ({
        color: braytonOverlay.stageColors[segment.key],
        key: segment.key,
        points: [
          loopCurve.getPointAt(segment.range[0]).toArray(),
          loopCurve
            .getPointAt((segment.range[0] + segment.range[1]) / 2)
            .toArray(),
          loopCurve.getPointAt(segment.range[1]).toArray()
        ]
      })),
    [loopCurve]
  )

  if (!viewerState.showBraytonOverlay || !overlayTreatment.brayton.visible) {
    return null
  }
  const intensity = overlayTreatment.brayton.intensity
  const particleScale = overlayTreatment.particles.scale

  return (
    <group>
      {segmentLines.map((segment) => (
        <SegmentLine
          color={segment.color}
          intensity={intensity}
          key={segment.key}
          points={segment.points}
        />
      ))}

      <Line
        color={colors.accent}
        lineWidth={0.8 * intensity}
        opacity={0.75 * intensity}
        points={shaftLine}
        transparent
      />

      <Line
        color={colors.heatInput}
        lineWidth={1.1 * intensity}
        opacity={0.7 * intensity}
        points={braytonOverlay.heatInputPath}
        transparent
      />

      <FlowParticles
        color={colors.heatInput}
        count={3}
        paused={viewerState.paused}
        radius={0.08 * particleScale}
        route={braytonOverlay.heatInputPath}
        speed={viewerState.animationSpeed * braytonOverlay.speedScale.heat}
        visible
      />

      {showWorkingFluidParticles
        ? braytonOverlay.loopSegments.map((segment) => {
            const segmentRoute = [
              loopCurve.getPointAt(segment.range[0]).toArray(),
              loopCurve
                .getPointAt((segment.range[0] + segment.range[1]) / 2)
                .toArray(),
              loopCurve.getPointAt(segment.range[1]).toArray()
            ]

            return (
              <FlowParticles
                color={braytonOverlay.stageColors[segment.key]}
                count={2}
                key={`fluid-${segment.key}`}
                paused={viewerState.paused}
                radius={0.07 * particleScale}
                route={segmentRoute}
                speed={
                  viewerState.animationSpeed * braytonOverlay.speedScale.brayton
                }
                visible={showWorkingFluidParticles}
              />
            )
          })
        : null}

      {sceneMode === 'energy'
        ? Object.entries(braytonOverlay.labelAnchors).map(([key, position]) => (
            <Html
              center
              distanceFactor={13}
              key={key}
              position={offsetPoint(position)}
            >
              <BraytonLabel
                note={braytonOverlay.stageNotes[key]}
                text={braytonOverlay.stageLabels[key]}
              />
            </Html>
          ))
        : null}
    </group>
  )
}
