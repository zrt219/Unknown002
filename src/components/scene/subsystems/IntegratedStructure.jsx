import { MathUtils } from 'three'
import CableLine from '../primitives/CableLine'
import Pipe from '../primitives/Pipe'
import { colors, spacecraftStructure } from '../../../data/spacecraftConfig'

function Strut({ length, position, radius = 0.09, rotation = [0, 0, 0] }) {
  return (
    <mesh castShadow position={position} rotation={rotation}>
      <cylinderGeometry args={[radius, radius, length, 10]} />
      <meshStandardMaterial color={colors.truss} metalness={0.28} roughness={0.56} />
    </mesh>
  )
}

function Collar({ position, radius, tube }) {
  return (
    <mesh castShadow position={position} rotation={[0, 0, Math.PI / 2]}>
      <torusGeometry args={[radius, tube, 10, 28]} />
      <meshStandardMaterial color="#8f99a6" metalness={0.34} roughness={0.44} />
    </mesh>
  )
}

export default function IntegratedStructure() {
  return (
    <group userData={{ subsystemId: 'integratedStructure' }}>
      {spacecraftStructure.axialLinks.map((link) => (
        <Pipe
          color={link.color}
          key={`axial-${link.position.join('-')}`}
          length={link.length}
          position={link.position}
          radius={link.radius ?? 0.11}
          rotation={[0, 0, Math.PI / 2]}
        />
      ))}

      {spacecraftStructure.braces.map((brace) => (
        <Strut
          key={`brace-${brace.position.join('-')}`}
          length={brace.length}
          position={brace.position}
          rotation={brace.rotation}
        />
      ))}

      {spacecraftStructure.collars.map((collar) => (
        <Collar key={`collar-${collar.position.join('-')}`} {...collar} />
      ))}

      {spacecraftStructure.forwardSection.boomAdapterFrame.map((frame) => (
        <mesh key={`adapter-frame-${frame.position.join('-')}`} castShadow position={frame.position} scale={frame.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={frame.color} metalness={0.24} roughness={0.6} />
        </mesh>
      ))}

      {[1, -1].flatMap((ySign) =>
        [1, -1].map((zSign) => (
          <group key={`adapter-clevis-${ySign}-${zSign}`} position={[9.95, 0.55 + ySign * 1.44, zSign * 1.44]}>
            <mesh castShadow scale={[0.28, 0.55, 0.14]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#788493" metalness={0.24} roughness={0.58} />
            </mesh>
            <mesh castShadow position={[0.22, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.72, 8]} />
              <meshStandardMaterial color="#9aa5b4" metalness={0.3} roughness={0.5} />
            </mesh>
          </group>
        ))
      )}

      {spacecraftStructure.forwardSection.boomAdapterStruts.map((brace) => (
        <Strut
          key={`boom-adapter-${brace.position.join('-')}`}
          length={brace.length}
          position={brace.position}
          rotation={brace.rotation}
          radius={0.08}
        />
      ))}

      {spacecraftStructure.forwardSection.boomJunctionBoxes.map((box) => (
        <mesh key={`junction-${box.position.join('-')}`} castShadow position={box.position} scale={box.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#687383" metalness={0.22} roughness={0.58} />
        </mesh>
      ))}

      <Strut length={1.7} position={[14.55, 2.3, -1.7]} rotation={[0.52, 0.16, 0.42]} />
      <Strut length={1.35} position={[15.2, 2.55, -2.1]} rotation={[MathUtils.degToRad(102), 0, 0]} />
      <Strut length={2.2} position={[9.85, -0.55, 1.4]} rotation={[0.82, 0.12, -0.84]} />
      <Strut length={2.2} position={[9.85, -0.55, -1.4]} rotation={[-0.82, -0.12, 0.84]} />
      <Strut length={1.9} position={[21.1, 0.55, 1.08]} rotation={[0.92, 0.14, -0.98]} />
      <Strut length={1.9} position={[21.1, 0.55, -1.08]} rotation={[-0.92, -0.14, 0.98]} />

      {spacecraftStructure.harnessRoutes.map((route, index) => (
        <CableLine key={`harness-${index}`} points={route} />
      ))}

      {spacecraftStructure.forwardSection.pmadHarnessRoutes.map((route, index) => (
        <CableLine
          color={index === 0 ? '#d8d08c' : index === 1 ? '#9cb8c9' : '#d8d08c'}
          key={`pmad-harness-${index}`}
          points={route}
        />
      ))}

      {spacecraftStructure.forwardSection.pmadHarnessRoutes
        .flatMap((route) => route.slice(-1))
        .filter((point) => point[0] > 21)
        .map((point) => (
          <mesh key={`thruster-harness-block-${point.join('-')}`} castShadow position={point} scale={[0.2, 0.18, 0.18]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#c8c27f" metalness={0.2} roughness={0.58} />
          </mesh>
        ))}

      {[[-6.85, 0, 0], [9.65, 0.55, 0], [14.45, 0.55, 0], [21.15, 0.2, 0]].map((mount) => (
        <mesh key={`mount-${mount.join('-')}`} castShadow position={mount}>
          <boxGeometry args={[0.38, 0.7, 0.7]} />
          <meshStandardMaterial color="#66707f" metalness={0.24} roughness={0.58} />
        </mesh>
      ))}

      <Pipe color="#7f8895" position={[9.55, 2.2, 0]} rotation={[0, 0, Math.PI / 2]} length={1.55} radius={0.06} />
      <Pipe color="#7f8895" position={[20.45, 1.55, 0]} rotation={[0, 0, Math.PI / 2]} length={1.4} radius={0.06} />
      <Pipe color="#7f8895" position={[14.55, 2.82, 0]} rotation={[0, 0, Math.PI / 2]} length={1.5} radius={0.06} />
      <Pipe color="#94a06c" position={[12.95, 2.98, 0.55]} rotation={[0.2, 0, Math.PI / 2]} length={1.5} radius={0.05} />
    </group>
  )
}
