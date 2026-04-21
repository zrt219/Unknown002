import { colors } from '../../../data/spacecraftConfig'

export default function RadiatorPanel({ position = [0, 0, 0], scale = [1, 1, 1] }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[7.6, 0.18, 4.2]} />
        <meshStandardMaterial
          color={colors.radiatorPanel}
          metalness={0.1}
          roughness={0.88}
        />
      </mesh>

      {[-2.2, 0, 2.2].map((z) => (
        <mesh key={z} position={[0, 0.12, z]}>
          <boxGeometry args={[7.6, 0.05, 0.08]} />
          <meshStandardMaterial color={colors.radiatorEdge} metalness={0.15} roughness={0.66} />
        </mesh>
      ))}

      {[-2.5, -1.25, 0, 1.25, 2.5].map((x) => (
        <mesh key={x} position={[x, -0.02, 0]}>
          <boxGeometry args={[0.08, 0.11, 4.26]} />
          <meshStandardMaterial color="#68729b" metalness={0.12} roughness={0.74} />
        </mesh>
      ))}

      <mesh position={[-3.75, 0.14, 0]}>
        <boxGeometry args={[0.22, 0.12, 4.26]} />
        <meshStandardMaterial color={colors.radiatorEdge} metalness={0.22} roughness={0.58} />
      </mesh>

      <mesh position={[3.75, 0.14, 0]}>
        <boxGeometry args={[0.18, 0.08, 4.26]} />
        <meshStandardMaterial color="#626a92" metalness={0.18} roughness={0.62} />
      </mesh>
    </group>
  )
}
