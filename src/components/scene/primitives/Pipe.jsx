import { colors } from '../../../data/spacecraftConfig'

export default function Pipe({
  color = colors.shieldSecondary,
  length = 1,
  position = [0, 0, 0],
  radius = 0.11,
  rotation = [0, 0, 0],
  scale = [1, 1, 1]
}) {
  return (
    <mesh castShadow position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[radius, radius, length, 10]} />
      <meshStandardMaterial color={color} metalness={0.32} roughness={0.52} />
    </mesh>
  )
}
