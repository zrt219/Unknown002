import { colors, subsystems } from '../../../data/spacecraftConfig'
import Pipe from '../primitives/Pipe'

export default function RadiationShield({ isSelected, onSelect, showShieldCone }) {
  const { position } = subsystems.shield

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('shield')
      }}
      position={position}
      userData={{ subsystemId: 'shield' }}
    >
      <mesh castShadow rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[1.05, 2.55, 4.2, 32]} />
        <meshStandardMaterial
          color={isSelected ? '#c79f58' : colors.shieldPrimary}
          metalness={0.18}
          roughness={0.72}
        />
      </mesh>

      {[-1.32, -0.08, 1.25].map((offset, index) => (
        <mesh key={offset} position={[offset, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[2.42 - index * 0.28, 2.42 - index * 0.28, 0.18, 24]} />
          <meshStandardMaterial color={colors.shieldSecondary} metalness={0.16} roughness={0.8} />
        </mesh>
      ))}

      {[[-1.85, 1.22, 0.92], [-1.85, -1.22, -0.92], [1.62, 1.12, 0.86], [1.62, -1.12, -0.86]].map(
        (brace) => (
          <mesh key={brace.join('-')} castShadow position={brace} rotation={[0.52, 0.18, 0.92]}>
            <cylinderGeometry args={[0.08, 0.08, 1.95, 8]} />
            <meshStandardMaterial color="#7d6950" metalness={0.18} roughness={0.68} />
          </mesh>
        )
      )}

      <Pipe color="#78644d" position={[2.28, 0.62, 0.92]} rotation={[0.22, 0, Math.PI / 2]} length={1.7} radius={0.08} />
      <Pipe color="#78644d" position={[2.28, -0.62, -0.92]} rotation={[-0.22, 0, Math.PI / 2]} length={1.7} radius={0.08} />

      {showShieldCone ? (
        <mesh position={[4.8, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[3.8, 10, 28, 1, true]} />
          <meshBasicMaterial color="#fbbf24" opacity={0.1} side={2} transparent />
        </mesh>
      ) : null}
    </group>
  )
}
