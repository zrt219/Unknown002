import EquipmentBox from '../primitives/EquipmentBox'
import Pipe from '../primitives/Pipe'
import { colors, spacecraftStructure, subsystems } from '../../../data/spacecraftConfig'

export default function SciencePayload({ isSelected, onSelect }) {
  const { position } = subsystems.sciencePayload

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('sciencePayload')
      }}
      position={position}
      userData={{ subsystemId: 'sciencePayload' }}
    >
      <Pipe color="#99a7b6" position={[-2.45, -0.55, 0.75]} rotation={[0.42, 0, 0.44]} scale={[1, 2.15, 1]} />
      <Pipe color="#9eb0c2" position={[-0.45, 1.45, -0.9]} rotation={[0, 0, Math.PI / 2]} length={1.05} radius={0.06} />

      {spacecraftStructure.forwardSection.payloadMount.struts.map((strut, index) => (
        <mesh key={`payload-strut-${index}`} castShadow position={[strut.position[0] - position[0], strut.position[1] - position[1], strut.position[2] - position[2]]} rotation={strut.rotation}>
          <cylinderGeometry args={[0.06, 0.06, strut.length, 8]} />
          <meshStandardMaterial color="#92a1b2" metalness={0.24} roughness={0.52} />
        </mesh>
      ))}

      <mesh castShadow position={[-1.95, 0.12, -0.18]} rotation={[0.18, 0, 0.46]}>
        <boxGeometry args={[spacecraftStructure.forwardSection.payloadMount.backboneLength, 0.18, 0.52]} />
        <meshStandardMaterial color="#8798ab" metalness={0.24} roughness={0.54} />
      </mesh>

      <mesh castShadow position={[-1.35, -0.2, 0.1]}>
        <boxGeometry args={[2.1, 0.34, 0.74]} />
        <meshStandardMaterial color="#93a2b3" metalness={0.22} roughness={0.5} />
      </mesh>

      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.56, 0.62, 2.25, 18]} />
        <meshStandardMaterial
          color={isSelected ? '#e8edf4' : colors.payload}
          metalness={0.2}
          roughness={0.44}
        />
      </mesh>

      <mesh castShadow position={[1.55, 0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.26, 0.3, 1.8, 12]} />
        <meshStandardMaterial color="#aab7c5" metalness={0.28} roughness={0.4} />
      </mesh>

      <EquipmentBox color="#7a8796" position={[-1.55, 0.85, 0.15]} scale={[1.05, 0.62, 0.6]} />
      <EquipmentBox color="#7f8fa0" position={[-1.95, -0.45, 0.8]} scale={[0.6, 0.48, 0.48]} />
      <EquipmentBox color="#8ca1b4" position={[0.2, 1.05, -0.92]} scale={[0.58, 0.42, 0.42]} />

      <mesh castShadow position={[0.52, 1.18, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 1.1, 8]} />
        <meshStandardMaterial color="#9fb2c4" metalness={0.22} roughness={0.5} />
      </mesh>

      <mesh position={[spacecraftStructure.forwardSection.payloadMount.instrumentOffset[0], spacecraftStructure.forwardSection.payloadMount.instrumentOffset[1], spacecraftStructure.forwardSection.payloadMount.instrumentOffset[2]]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.05, 18, 1, false]} />
        <meshStandardMaterial color="#dbe4ed" metalness={0.12} roughness={0.62} />
      </mesh>

      <mesh position={spacecraftStructure.forwardSection.payloadMount.dishOffset} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.58, 0.07, 16, 1, false]} />
        <meshStandardMaterial color="#d7e0eb" metalness={0.12} roughness={0.62} />
      </mesh>

      <mesh castShadow position={[0.8, -0.62, -0.7]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.18, 0.9, 10]} />
        <meshStandardMaterial color="#b7c4d1" metalness={0.16} roughness={0.48} />
      </mesh>
    </group>
  )
}
