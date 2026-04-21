import RadiatorPanel from '../primitives/RadiatorPanel'
import Pipe from '../primitives/Pipe'
import { colors, subsystems } from '../../../data/spacecraftConfig'

function RadiatorWing({ mirror = 1, rotation = 0, y = 0 }) {
  return (
    <group position={[0, y, 0]} rotation={[0, 0, rotation]}>
      <mesh castShadow position={[0.1 * mirror, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 1.25, 12]} />
        <meshStandardMaterial color="#7c879a" metalness={0.24} roughness={0.56} />
      </mesh>
      <mesh castShadow position={[-1.55 * mirror, 0, 0]}>
        <boxGeometry args={[3.1, 0.28, 0.28]} />
        <meshStandardMaterial color={colors.truss} metalness={0.26} roughness={0.56} />
      </mesh>
      <mesh castShadow position={[-0.55 * mirror, 0, 0]}>
        <boxGeometry args={[0.7, 0.42, 0.42]} />
        <meshStandardMaterial color="#697389" metalness={0.24} roughness={0.58} />
      </mesh>
      <Pipe color="#9ba6c8" position={[-3.15 * mirror, 0.16, 1.72]} rotation={[0, 0, Math.PI / 2]} length={4.6} radius={0.045} />
      <Pipe color="#7896b5" position={[-3.15 * mirror, -0.16, -1.72]} rotation={[0, 0, Math.PI / 2]} length={4.6} radius={0.045} />
      <RadiatorPanel position={[-6.1 * mirror, 0, 0]} scale={[1, 1, 1]} />
      <RadiatorPanel position={[-13.9 * mirror, 0, 0]} scale={[1, 1, 1]} />
    </group>
  )
}

export default function Radiators({ isSelected, onSelect, showRadiatorEmphasis }) {
  const { position } = subsystems.radiators

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('radiators')
      }}
      position={position}
      userData={{ subsystemId: 'radiators' }}
    >
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.55, 0.55, 3.4, 16]} />
        <meshStandardMaterial
          color={isSelected ? '#5d6aa2' : colors.truss}
          metalness={0.34}
          roughness={0.48}
        />
      </mesh>

      <mesh castShadow position={[-0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.36, 0.48, 2.2, 14]} />
        <meshStandardMaterial color="#60697b" metalness={0.28} roughness={0.56} />
      </mesh>

      <mesh castShadow position={[0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.72, 0.72, 1.2, 18]} />
        <meshStandardMaterial color="#50596a" metalness={0.26} roughness={0.6} />
      </mesh>

      {[
        [0.8, 0.8, 1.34, '#a47e54'],
        [0.8, -0.8, -1.34, '#a47e54'],
        [0.55, 1.18, -1.12, '#7896b5'],
        [0.55, -1.18, 1.12, '#7896b5']
      ].map(([x, y, z, color]) => (
        <mesh key={`root-manifold-${x}-${y}-${z}`} castShadow position={[x, y, z]} scale={[0.55, 0.28, 0.36]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} metalness={0.22} roughness={0.62} />
        </mesh>
      ))}

      {[-0.9, 0.1, 0.95].map((x) => (
        <mesh key={`root-service-band-${x}`} castShadow position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.74, 0.035, 10, 24]} />
          <meshStandardMaterial color="#8490a3" metalness={0.28} roughness={0.52} />
        </mesh>
      ))}

      {[
        [1.05, 0.78, 1.22],
        [1.05, -0.78, -1.22],
        [0.85, 1.08, -1.04],
        [0.85, -1.08, 1.04]
      ].map((brace) => (
        <mesh key={brace.join('-')} castShadow position={brace} rotation={[0.68, 0.2, 0.88]}>
          <cylinderGeometry args={[0.07, 0.07, 1.7, 8]} />
          <meshStandardMaterial color="#768096" metalness={0.26} roughness={0.54} />
        </mesh>
      ))}

      <RadiatorWing mirror={1} rotation={0.88} y={0.12} />
      <RadiatorWing mirror={1} rotation={-0.88} y={0.12} />
      <RadiatorWing mirror={-1} rotation={2.26} y={-0.12} />
      <RadiatorWing mirror={-1} rotation={-2.26} y={-0.12} />

      <Pipe position={[2.15, 0.55, 1.45]} rotation={[0, 0, Math.PI / 2]} length={3.2} />
      <Pipe position={[2.15, -0.55, -1.45]} rotation={[0, 0, Math.PI / 2]} length={3.2} />
      <Pipe color={colors.truss} position={[1.55, 0, 0]} rotation={[0, 0, Math.PI / 2]} length={2.2} radius={0.13} />
      <Pipe color="#8e9bc2" position={[1.6, 1.15, 0]} rotation={[0, 0, Math.PI / 2]} length={1.55} radius={0.08} />
      <Pipe color="#8e9bc2" position={[1.6, -1.15, 0]} rotation={[0, 0, Math.PI / 2]} length={1.55} radius={0.08} />
      <Pipe color="#a47e54" position={[1.25, 0.8, 1.35]} rotation={[0.12, 0, Math.PI / 2]} length={1.6} radius={0.055} />
      <Pipe color="#7896b5" position={[1.25, -0.8, -1.35]} rotation={[-0.12, 0, Math.PI / 2]} length={1.6} radius={0.055} />

      {showRadiatorEmphasis ? (
        <>
          <mesh position={[-10.4, 7.85, 8.45]} rotation={[0.74, 0.02, 0.88]}>
            <planeGeometry args={[18.5, 7.2]} />
            <meshBasicMaterial color="#7fb8ff" opacity={0.14} transparent />
          </mesh>
          <mesh position={[-10.4, -7.7, -8.45]} rotation={[-0.74, -0.02, 0.88]}>
            <planeGeometry args={[18.5, 7.2]} />
            <meshBasicMaterial color="#7fb8ff" opacity={0.14} transparent />
          </mesh>
        </>
      ) : null}
    </group>
  )
}
