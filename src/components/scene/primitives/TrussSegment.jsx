import { createLinearOffsets } from '../../../utils/geometry'
import { colors } from '../../../data/spacecraftConfig'

function Rod({ position, rotation = [0, 0, 0], scale = [1, 1, 1] }) {
  return (
    <mesh castShadow position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
      <meshStandardMaterial color={colors.truss} metalness={0.3} roughness={0.56} />
    </mesh>
  )
}

export default function TrussSegment({ length = 2.4, position = [0, 0, 0] }) {
  const corners = createLinearOffsets(2, 1.4)
  const halfLength = length / 2

  return (
    <group position={position}>
      {corners.flatMap((y) =>
        corners.map((z) => (
          <Rod
            key={`rail-${y}-${z}`}
            position={[0, y, z]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1, length, 1]}
          />
        ))
      )}

      {corners.flatMap((y) =>
        corners.map((z) => (
          <group key={`brace-${y}-${z}`}>
            <Rod position={[-halfLength / 2, 0, 0]} rotation={[0, 0, 0.62]} scale={[1, 2.1, 1]} />
            <Rod position={[halfLength / 2, 0, 0]} rotation={[0, 0, -0.62]} scale={[1, 2.1, 1]} />
          </group>
        ))
      )}
    </group>
  )
}
