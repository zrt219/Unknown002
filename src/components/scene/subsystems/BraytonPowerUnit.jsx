import EquipmentBox from '../primitives/EquipmentBox'
import Pipe from '../primitives/Pipe'
import { colors, subsystems } from '../../../data/spacecraftConfig'

export default function BraytonPowerUnit({ isSelected, onSelect }) {
  const { position } = subsystems.braytonPowerUnit

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('braytonPowerUnit')
      }}
      position={position}
      userData={{ subsystemId: 'braytonPowerUnit' }}
    >
      <mesh castShadow position={[-0.15, -1.45, 0]}>
        <boxGeometry args={[5.7, 0.32, 2.8]} />
        <meshStandardMaterial color="#5f6873" metalness={0.24} roughness={0.62} />
      </mesh>

      {[-2.2, -0.4, 1.4, 2.5].map((x) => (
        <mesh key={`rail-${x}`} castShadow position={[x, -1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 1.35, 8]} />
          <meshStandardMaterial color="#798290" metalness={0.28} roughness={0.54} />
        </mesh>
      ))}

      <Pipe color="#9aa486" position={[0.28, 0.45, 0]} rotation={[0, 0, Math.PI / 2]} length={4.05} radius={0.075} />

      <mesh castShadow position={[-1.2, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.75, 0.85, 1.6, 18]} />
        <meshStandardMaterial
          color={isSelected ? '#6f9778' : colors.braytonBody}
          metalness={0.22}
          roughness={0.58}
        />
      </mesh>

      <mesh castShadow position={[0.55, 0.45, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.62, 0.72, 1.4, 18]} />
        <meshStandardMaterial color="#6a7468" metalness={0.28} roughness={0.56} />
      </mesh>

      <mesh castShadow position={[1.8, 0.45, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.45, 0.45, 1.8, 16]} />
        <meshStandardMaterial color={colors.braytonAccent} metalness={0.22} roughness={0.5} />
      </mesh>

      {[-1.75, -1.2, -0.7].map((x) => (
        <mesh key={`compressor-vane-${x}`} castShadow position={[x, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.62, 0.026, 8, 22]} />
          <meshStandardMaterial color="#91a286" metalness={0.24} roughness={0.55} />
        </mesh>
      ))}

      {[0.25, 0.65, 1.05].map((x) => (
        <mesh key={`turbine-vane-${x}`} castShadow position={[x, 0.45, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.52, 0.025, 8, 22]} />
          <meshStandardMaterial color="#a08358" metalness={0.24} roughness={0.54} />
        </mesh>
      ))}

      <EquipmentBox color="#6b766c" position={[0.1, -0.9, 0]} scale={[2.1, 0.95, 1.6]} />
      <EquipmentBox color="#57665a" position={[2.2, -0.35, 0.65]} scale={[0.72, 0.5, 0.56]} />
      <EquipmentBox color="#57665a" position={[2.2, -0.35, -0.65]} scale={[0.72, 0.5, 0.56]} />
      <EquipmentBox color="#4f6057" position={[-2.4, -0.4, 0]} scale={[0.85, 0.7, 1.25]} />
      <EquipmentBox color="#5f6e66" position={[0.95, 1.2, 0]} scale={[1.45, 0.35, 1.15]} />

      {[-0.75, -0.45, -0.15, 0.15, 0.45, 0.75].map((z) => (
        <mesh key={`heat-exchanger-fin-${z}`} castShadow position={[-2.85, 0.82, z]} scale={[0.08, 0.78, 0.04]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#73856f" metalness={0.18} roughness={0.7} />
        </mesh>
      ))}

      <mesh castShadow position={[-3.34, 0.55, 0.82]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.17, 0.17, 0.36, 12]} />
        <meshStandardMaterial color="#b48a5e" metalness={0.22} roughness={0.58} />
      </mesh>
      <mesh castShadow position={[3.08, 0.92, 0.38]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 0.34, 12]} />
        <meshStandardMaterial color="#95a8c8" metalness={0.22} roughness={0.58} />
      </mesh>
      <mesh castShadow position={[3.08, -0.45, -0.54]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.13, 0.32, 12]} />
        <meshStandardMaterial color="#819f9f" metalness={0.2} roughness={0.62} />
      </mesh>

      <Pipe position={[0.95, -0.15, 1.15]} rotation={[Math.PI / 2, 0, 0]} length={2.4} />
      <Pipe position={[0.95, -0.15, -1.15]} rotation={[Math.PI / 2, 0, 0]} length={2.4} />
      <Pipe position={[2.6, 0.6, 0]} rotation={[0, 0, Math.PI / 2]} length={1.8} />
      <Pipe color="#8d9a8f" position={[-3.15, 0.55, 0.82]} rotation={[0.28, 0, Math.PI / 2]} length={1.9} radius={0.08} />
      <Pipe color="#8d9a8f" position={[-3.15, 0.55, -0.82]} rotation={[-0.28, 0, Math.PI / 2]} length={1.9} radius={0.08} />
      <Pipe color="#88997e" position={[3.25, 0.92, 0.38]} rotation={[0.08, 0.22, Math.PI / 2]} length={1.5} radius={0.07} />
      <Pipe color="#819f9f" position={[3.2, -0.45, -0.54]} rotation={[-0.08, -0.22, Math.PI / 2]} length={1.45} radius={0.055} />

      {[-0.95, 0.1, 1.15, 2.25].map((x) => (
        <mesh key={`ring-${x}`} castShadow position={[x, 0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.78, 0.045, 10, 22]} />
          <meshStandardMaterial color="#748177" metalness={0.22} roughness={0.62} />
        </mesh>
      ))}
    </group>
  )
}
