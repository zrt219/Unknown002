import Pipe from '../primitives/Pipe'
import Thruster from '../primitives/Thruster'
import { colors, spacecraftStructure, subsystems } from '../../../data/spacecraftConfig'

export default function ElectricPropulsion({
  animationSpeed,
  isSelected,
  onSelect,
  paused,
  showPlume
}) {
  const { position } = subsystems.electricThrusters
  const thrusterOffsets = spacecraftStructure.propulsionFrame.thrusterOffsets

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('electricThrusters')
      }}
      position={position}
      userData={{ subsystemId: 'electricThrusters' }}
    >
      <mesh castShadow position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 4.6, 8]} />
        <meshStandardMaterial
          color={isSelected ? '#90a0b2' : colors.truss}
          metalness={0.32}
          roughness={0.48}
        />
      </mesh>

      <Pipe color={colors.truss} position={[-0.85, spacecraftStructure.propulsionFrame.railOffset, 0.78]} rotation={[0, 0, Math.PI / 2]} length={spacecraftStructure.propulsionFrame.railLength} />
      <Pipe color={colors.truss} position={[-0.85, -spacecraftStructure.propulsionFrame.railOffset, -0.78]} rotation={[0, 0, Math.PI / 2]} length={spacecraftStructure.propulsionFrame.railLength} />
      <Pipe color={colors.truss} position={[-0.85, spacecraftStructure.propulsionFrame.railOffset, -0.78]} rotation={[0, 0, Math.PI / 2]} length={spacecraftStructure.propulsionFrame.railLength} />
      <Pipe color={colors.truss} position={[-0.85, -spacecraftStructure.propulsionFrame.railOffset, 0.78]} rotation={[0, 0, Math.PI / 2]} length={spacecraftStructure.propulsionFrame.railLength} />
      {spacecraftStructure.propulsionFrame.supportBrackets.map((brace) => (
        <Pipe
          color="#8792a0"
          key={`thruster-brace-${brace.position.join('-')}`}
          position={brace.position}
          rotation={brace.rotation}
          length={brace.length}
          radius={0.07}
        />
      ))}
      <Pipe color="#7e8793" position={[-2.35, 0, 0]} rotation={[0, 0, Math.PI / 2]} length={1.35} radius={0.18} />
      <Pipe color="#7e8793" position={[-1.55, 0, 0]} rotation={[0, Math.PI / 2, 0]} length={2.6} radius={0.08} />

      <mesh castShadow position={spacecraftStructure.propulsionFrame.clusterRoot.position} scale={spacecraftStructure.propulsionFrame.clusterRoot.scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5f6977" metalness={0.22} roughness={0.62} />
      </mesh>

      <mesh castShadow position={[-2.68, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.26, 1.1, 12]} />
        <meshStandardMaterial color="#65707d" metalness={0.24} roughness={0.58} />
      </mesh>

      {spacecraftStructure.forwardSection.propulsionInterfaceBoxes.map((box, index) => (
        <mesh key={`prop-box-${index}`} castShadow position={[box.position[0] - position[0], box.position[1] - position[1], box.position[2]]} scale={box.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={index === 0 ? '#66707d' : '#5b6470'} metalness={0.24} roughness={0.58} />
        </mesh>
      ))}

      {thrusterOffsets.map((offset) => (
        <Thruster
          animationSpeed={animationSpeed}
          key={offset.join('-')}
          paused={paused}
          position={offset}
          showPlume={showPlume}
        />
      ))}

      {thrusterOffsets.map((offset, index) => (
        <group key={`thruster-routing-${index}`}>
          <Pipe
            color="#d8d08c"
            position={[-1.05, offset[1] * 0.72, offset[2] * 0.72]}
            rotation={[0, 0, Math.PI / 2]}
            length={1.8}
            radius={0.04}
          />
          <Pipe
            color="#95a0ae"
            position={[-1.55, offset[1] * 0.82, offset[2] * 0.82]}
            rotation={[0, 0, Math.PI / 2]}
            length={1.2}
            radius={0.055}
          />
        </group>
      ))}
    </group>
  )
}
