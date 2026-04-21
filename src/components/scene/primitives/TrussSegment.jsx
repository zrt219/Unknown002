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
  const braceLength = Math.sqrt(length * length + 1.4 * 1.4)
  const braceAngle = Math.atan2(length, 1.4)

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

      {corners.map((z) => (
        <group key={`xy-brace-${z}`}>
          <Rod position={[0, 0, z]} rotation={[0, 0, braceAngle]} scale={[1, braceLength, 1]} />
          <Rod position={[0, 0, z]} rotation={[0, 0, -braceAngle]} scale={[1, braceLength, 1]} />
        </group>
      ))}

      {corners.map((y) => (
        <group key={`xz-brace-${y}`}>
          <Rod position={[0, y, 0]} rotation={[Math.PI / 2, 0, braceAngle]} scale={[1, braceLength, 1]} />
          <Rod position={[0, y, 0]} rotation={[Math.PI / 2, 0, -braceAngle]} scale={[1, braceLength, 1]} />
        </group>
      ))}

      {[-halfLength, halfLength].flatMap((x) =>
        corners.flatMap((y) =>
          corners.map((z) => (
            <mesh key={`node-${x}-${y}-${z}`} castShadow position={[x, y, z]}>
              <sphereGeometry args={[0.13, 8, 8]} />
              <meshStandardMaterial color="#8c96a6" metalness={0.28} roughness={0.52} />
            </mesh>
          ))
        )
      )}
    </group>
  )
}
