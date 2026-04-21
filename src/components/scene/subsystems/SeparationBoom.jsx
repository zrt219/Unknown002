import CableLine from '../primitives/CableLine'
import TrussSegment from '../primitives/TrussSegment'
import { createLinearOffsets } from '../../../utils/geometry'
import { spacecraftStructure, subsystems } from '../../../data/spacecraftConfig'

export default function SeparationBoom({ isSelected, onSelect }) {
  const { position } = subsystems.separationBoom
  const offsets = createLinearOffsets(
    spacecraftStructure.boom.segments,
    spacecraftStructure.boom.spacing
  )

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('separationBoom')
      }}
      position={position}
      scale={isSelected ? [1.02, 1.02, 1.02] : [1, 1, 1]}
      userData={{ subsystemId: 'separationBoom' }}
    >
      {offsets.map((offset) => (
        <TrussSegment
          key={offset}
          length={spacecraftStructure.boom.length}
          position={[offset, 0, 0]}
        />
      ))}

      {spacecraftStructure.boom.cableRoutes.map((route, index) => (
        <CableLine
          key={`boom-cable-${index}`}
          points={route.map((point) => [point[0] - position[0], point[1], point[2]])}
        />
      ))}
    </group>
  )
}
