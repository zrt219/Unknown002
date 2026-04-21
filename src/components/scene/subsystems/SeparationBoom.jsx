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

      {spacecraftStructure.boom.cableClampOffsets.map((offset) => (
        <group key={`boom-clamp-${offset}`} position={[offset, 0, 0]}>
          <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.05, 0.035, 8, 22]} />
            <meshStandardMaterial color="#7f8a99" metalness={0.28} roughness={0.54} />
          </mesh>
          {[
            [0, 1.36, 1.12],
            [0, -1.36, -1.12]
          ].map((clamp) => (
            <mesh key={`stand-${clamp.join('-')}`} castShadow position={clamp} scale={[0.18, 0.22, 0.16]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#8a95a5" metalness={0.24} roughness={0.58} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}
