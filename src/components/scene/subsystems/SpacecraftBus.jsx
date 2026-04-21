import EquipmentBox from '../primitives/EquipmentBox'
import Pipe from '../primitives/Pipe'
import { colors, spacecraftStructure, subsystems } from '../../../data/spacecraftConfig'

export default function SpacecraftBus({ isSelected, onSelect, selectedSubsystem }) {
  const { position } = subsystems.spacecraftBus
  const pmadSelected = selectedSubsystem === 'pmad'

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('spacecraftBus')
      }}
      position={position}
      userData={{ subsystemId: 'spacecraftBus' }}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4.4, 3.2, 3.2]} />
        <meshStandardMaterial
          color={isSelected ? '#aab6c7' : colors.bus}
          metalness={0.2}
          roughness={0.62}
        />
      </mesh>

      <mesh castShadow position={[0.15, 0, 1.66]} scale={[4.05, 2.15, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#6f7986" metalness={0.18} roughness={0.68} />
      </mesh>

      <mesh castShadow position={[0.3, 0.08, -1.66]} scale={[3.25, 2.45, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#69727d" metalness={0.18} roughness={0.7} />
      </mesh>

      <mesh castShadow position={[2.25, -1.28, 0]} scale={[1.2, 0.26, 2.35]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5a6470" metalness={0.22} roughness={0.66} />
      </mesh>

      <EquipmentBox color="#6f7784" position={[-1.8, 1.7, 0.95]} scale={[1.2, 0.85, 0.5]} />
      <EquipmentBox color="#6f7784" position={[-1.8, 1.7, -0.95]} scale={[1.2, 0.85, 0.5]} />
      <EquipmentBox color="#5d6673" position={[-2.15, -0.7, 0]} scale={[0.55, 1.15, 1.1]} />
      <EquipmentBox color="#69727f" position={[0.45, -1.1, 1.25]} scale={[1.5, 0.55, 0.45]} />
      <EquipmentBox color="#737d8a" position={[-0.45, 0.25, -1.52]} scale={[0.7, 1.15, 0.42]} />
      <EquipmentBox color="#646f7d" position={[0.8, 1.15, 1.36]} scale={[1.6, 0.55, 0.38]} />
      <EquipmentBox color="#5b6674" position={[1.95, 1.25, -1.32]} scale={[0.72, 1.18, 0.36]} />
      <EquipmentBox color="#626d7a" position={[-0.75, -1.18, -1.26]} scale={[1.05, 0.42, 0.5]} />

      <mesh castShadow position={[spacecraftStructure.forwardSection.pmadRack.backplanePosition[0] - position[0], spacecraftStructure.forwardSection.pmadRack.backplanePosition[1] - position[1], spacecraftStructure.forwardSection.pmadRack.backplanePosition[2]]} scale={spacecraftStructure.forwardSection.pmadRack.backplaneScale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4e5a67" metalness={0.26} roughness={0.62} />
      </mesh>

      {spacecraftStructure.forwardSection.pmadRack.modules.map((module, index) => (
        <EquipmentBox
          color={index === 1 ? '#4f5d6b' : '#596673'}
          isSelected={pmadSelected}
          key={`pmad-module-${index}`}
          onClick={(event) => {
            event.stopPropagation()
            onSelect('pmad')
          }}
          position={[module.position[0] - position[0], module.position[1] - position[1], module.position[2]]}
          scale={module.scale}
          userData={{ subsystemId: 'pmad' }}
        />
      ))}

      <EquipmentBox
        color="#556270"
        isSelected={pmadSelected}
        onClick={(event) => {
          event.stopPropagation()
          onSelect('pmad')
        }}
        position={[2.2, 0.6, 0]}
        scale={[0.8, 1.3, 0.9]}
        userData={{ subsystemId: 'pmad' }}
      />
      <EquipmentBox
        color="#5e6976"
        isSelected={pmadSelected}
        onClick={(event) => {
          event.stopPropagation()
          onSelect('pmad')
        }}
        position={[1.55, 1.25, 0.92]}
        scale={[0.72, 0.58, 0.5]}
        userData={{ subsystemId: 'pmad' }}
      />
      <EquipmentBox
        color="#596673"
        isSelected={pmadSelected}
        onClick={(event) => {
          event.stopPropagation()
          onSelect('pmad')
        }}
        position={[1.55, 0.1, -0.92]}
        scale={[0.68, 0.62, 0.48]}
        userData={{ subsystemId: 'pmad' }}
      />
      <Pipe position={[2.7, 1.9, 0]} rotation={[0, 0, 0]} scale={[1, 2.1, 1]} />
      <Pipe color="#a0acb8" position={[2.65, -0.25, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1.6, 1]} />
      <Pipe color="#9aa6b4" position={[1.55, -1.12, 1.08]} rotation={[0.18, 0, Math.PI / 2]} length={2.45} radius={0.08} />
      <Pipe color="#9aa6b4" position={[-0.85, 1.45, -1.45]} rotation={[0, Math.PI / 2, 0]} length={1.35} radius={0.07} />
      <Pipe color="#d8d08c" position={[1.95, 1.28, 0]} rotation={[0, 0, Math.PI / 2]} length={2.4} radius={0.05} />
      <Pipe color="#d8d08c" position={[2.75, 0.42, 0.48]} rotation={[0.12, 0, Math.PI / 2]} length={1.6} radius={0.045} />
      <Pipe color="#d8d08c" position={[2.75, 0.42, -0.48]} rotation={[-0.12, 0, Math.PI / 2]} length={1.6} radius={0.045} />
      <Pipe color="#9aa6b4" position={[2.45, -0.82, 1.1]} rotation={[0.2, 0.1, Math.PI / 2]} length={1.3} radius={0.07} />
      <Pipe color="#9aa6b4" position={[2.45, -0.82, -1.1]} rotation={[-0.2, -0.1, Math.PI / 2]} length={1.3} radius={0.07} />
      {spacecraftStructure.forwardSection.pmadRack.connectorRoutes.map((route, index) => (
        route.slice(0, -1).map((point, routeIndex) => {
          const next = route[routeIndex + 1]
          const dx = next[0] - point[0]
          const dy = next[1] - point[1]
          const dz = next[2] - point[2]
          const length = Math.sqrt(dx * dx + dy * dy + dz * dz)
          const midpoint = [
            (point[0] + next[0]) / 2 - position[0],
            (point[1] + next[1]) / 2 - position[1],
            (point[2] + next[2]) / 2
          ]
          const yaw = Math.atan2(dx, dz)
          const pitch = Math.atan2(dy, Math.sqrt(dx * dx + dz * dz))

          return (
            <Pipe
              color={index === 0 ? '#d8d08c' : '#9cb8c9'}
              key={`pmad-connector-${index}-${routeIndex}`}
              length={length}
              position={midpoint}
              radius={0.045}
              rotation={[Math.PI / 2 - pitch, yaw, 0]}
            />
          )
        })
      ))}

      <mesh castShadow position={[0.8, 2.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 3.6, 10]} />
        <meshStandardMaterial color="#9db5c8" metalness={0.28} roughness={0.52} />
      </mesh>

      <mesh castShadow position={[-0.7, 2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 2.5, 8]} />
        <meshStandardMaterial color="#8aa0b0" metalness={0.32} roughness={0.48} />
      </mesh>

      <mesh castShadow position={[0.2, 1.4, -2.4]} rotation={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 2.4, 10]} />
        <meshStandardMaterial color="#9ea8b3" metalness={0.24} roughness={0.56} />
      </mesh>

      <mesh castShadow position={[2.55, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.28, 0.32, 1.1, 14]} />
        <meshStandardMaterial color="#7f8795" metalness={0.24} roughness={0.52} />
      </mesh>

      <mesh castShadow position={[-1.1, -1.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 2.4, 10]} />
        <meshStandardMaterial color="#7c8797" metalness={0.26} roughness={0.5} />
      </mesh>

      <mesh position={[-2.6, 1.25, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.95, 0.15, 12, 1, false]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.15} roughness={0.56} />
      </mesh>

      <mesh position={[0.2, 2.95, 0.65]} rotation={[0.05, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.06, 18, 1, false]} />
        <meshStandardMaterial color="#d3dde8" metalness={0.14} roughness={0.58} />
      </mesh>

      {spacecraftStructure.forwardSection.boomJunctionBoxes.map((box, index) => (
        <EquipmentBox
          color="#5a6371"
          key={`bus-junction-${index}`}
          position={[box.position[0] - position[0] + 1.2, box.position[1] - position[1] - 0.05, box.position[2]]}
          scale={[0.34, 0.28, 0.24]}
        />
      ))}
    </group>
  )
}
