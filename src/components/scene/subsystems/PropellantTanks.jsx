import Pipe from '../primitives/Pipe'
import { colors, spacecraftStructure, subsystems } from '../../../data/spacecraftConfig'

export default function PropellantTanks({ isSelected, onSelect }) {
  const { position } = subsystems.propellantTanks

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('propellantTanks')
      }}
      position={position}
      userData={{ subsystemId: 'propellantTanks' }}
    >
      <Pipe color={colors.truss} position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1.15, spacecraftStructure.tankRack.spineLength, 1.15]} />
      <Pipe color={colors.truss} position={[-0.55, spacecraftStructure.tankRack.crossbeamOffset, 0]} rotation={[0, 0, 0]} scale={[1, 3.1, 1]} />
      <Pipe color={colors.truss} position={[-0.55, -spacecraftStructure.tankRack.crossbeamOffset, 0]} rotation={[0, 0, 0]} scale={[1, 3.1, 1]} />
      <Pipe color="#6f7785" position={[-1.65, 0, 0]} rotation={[0, 0, Math.PI / 2]} length={2.1} radius={0.16} />
      <Pipe color="#7a8390" position={[-2.25, 1.25, 0.95]} rotation={[0.82, 0.16, -0.88]} length={2.2} radius={0.08} />
      <Pipe color="#7a8390" position={[-2.25, -1.25, -0.95]} rotation={[-0.82, -0.16, 0.88]} length={2.2} radius={0.08} />

      <mesh castShadow position={[-1.05, 0, 0]} scale={[0.72, 0.82, 0.92]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#667180" metalness={0.22} roughness={0.62} />
      </mesh>

      {[
        [0, 1.25, 1.55],
        [0, -1.25, -1.55]
      ].map((tank) => (
        <group key={tank.join('-')} position={tank}>
          <mesh castShadow position={[-0.22, 0, 0]}>
            <boxGeometry args={[3.1, 0.32, 0.72]} />
            <meshStandardMaterial color="#6d7686" metalness={0.2} roughness={0.64} />
          </mesh>
          <mesh castShadow>
            <sphereGeometry args={[1.4, 20, 20]} />
            <meshStandardMaterial
              color={isSelected ? '#d7dfe8' : colors.tank}
              metalness={0.18}
              roughness={0.4}
            />
          </mesh>
          <mesh castShadow position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.22, 0.8, 12]} />
            <meshStandardMaterial color="#8d96a5" metalness={0.3} roughness={0.54} />
          </mesh>
          <mesh castShadow position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.45, 10]} />
            <meshStandardMaterial color="#98a3b0" metalness={0.24} roughness={0.46} />
          </mesh>
        </group>
      ))}

      {spacecraftStructure.forwardSection.tankSaddles.map((saddle, index) => (
        <mesh key={`tank-saddle-${index}`} castShadow position={[saddle.position[0] - position[0], saddle.position[1] - position[1], saddle.position[2]]} rotation={saddle.rotation}>
          <torusGeometry args={[0.82, 0.11, 10, 22, Math.PI]} />
          <meshStandardMaterial color="#738093" metalness={0.24} roughness={0.56} />
        </mesh>
      ))}

      {spacecraftStructure.forwardSection.tankClampBands.map((band, index) => (
        <mesh key={`tank-clamp-band-${index}`} castShadow position={[band.position[0] - position[0], band.position[1] - position[1], band.position[2]]} rotation={band.rotation}>
          <torusGeometry args={[1.42, 0.04, 10, 28]} />
          <meshStandardMaterial color="#8b97a8" metalness={0.26} roughness={0.54} />
        </mesh>
      ))}

      {spacecraftStructure.forwardSection.tankHardpoints.map((hardpoint, index) => (
        <mesh key={`tank-hardpoint-${index}`} castShadow position={[hardpoint.position[0] - position[0], hardpoint.position[1] - position[1], hardpoint.position[2]]} scale={hardpoint.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#7c8797" metalness={0.24} roughness={0.58} />
        </mesh>
      ))}

      <mesh
        castShadow
        position={[
          spacecraftStructure.forwardSection.propellantManifold.position[0] - position[0],
          spacecraftStructure.forwardSection.propellantManifold.position[1] - position[1],
          spacecraftStructure.forwardSection.propellantManifold.position[2]
        ]}
        scale={spacecraftStructure.forwardSection.propellantManifold.scale}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#758190" metalness={0.24} roughness={0.58} />
      </mesh>

      <Pipe position={[1.8, 0.1, 0.7]} rotation={[0.2, 0, Math.PI / 2]} length={4.5} />
      <Pipe position={[1.8, -0.1, -0.7]} rotation={[-0.2, 0, Math.PI / 2]} length={4.5} />
      <Pipe color="#95a0ae" position={[-1.55, 0.85, 1.2]} rotation={[0.2, 0, 0.72]} scale={[1, 2.25, 1]} />
      <Pipe color="#95a0ae" position={[-1.55, -0.85, -1.2]} rotation={[-0.2, 0, -0.72]} scale={[1, 2.25, 1]} />
      <Pipe color="#a6b1bc" position={[0.95, 1.22, 1.52]} rotation={[0.1, 0, Math.PI / 2]} length={1.7} radius={0.07} />
      <Pipe color="#a6b1bc" position={[0.95, -1.22, -1.52]} rotation={[-0.1, 0, Math.PI / 2]} length={1.7} radius={0.07} />

      {spacecraftStructure.forwardSection.propellantFeedRoutes.map((route, index) => (
        <group key={`feed-route-${index}`}>
          {route.slice(0, -1).map((point, routeIndex) => {
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
                color="#95a0ae"
                key={`feed-segment-${index}-${routeIndex}`}
                length={length}
                position={midpoint}
                radius={routeIndex === 0 ? 0.045 : 0.04}
                rotation={[Math.PI / 2 - pitch, yaw, 0]}
              />
            )
          })}
        </group>
      ))}
    </group>
  )
}
