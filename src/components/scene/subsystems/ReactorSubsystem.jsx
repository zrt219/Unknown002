import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { braytonOverlay, colors, subsystems } from '../../../data/spacecraftConfig'
import Pipe from '../primitives/Pipe'

export default function ReactorSubsystem({
  animationSpeed,
  isSelected,
  onSelect,
  paused,
  pulseWeight = 1
}) {
  const { position } = subsystems.reactor
  const coreRef = useRef(null)

  useFrame(({ clock }) => {
    if (!coreRef.current) {
      return
    }

    const pulse = paused
      ? 0.5
      : 0.5 +
        Math.sin(
          clock.elapsedTime * animationSpeed * braytonOverlay.speedScale.glow
        ) *
          0.18 *
          pulseWeight

    coreRef.current.emissiveIntensity = 0.26 + pulse * 0.18
    coreRef.current.color.lerpColors(
      new THREE.Color(colors.reactorCore),
      new THREE.Color('#ffc58f'),
      paused ? 0.08 : 0.12 + pulse * 0.08
    )
  })

  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onSelect('reactor')
      }}
      position={position}
      userData={{ subsystemId: 'reactor' }}
    >
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.22, 1.28, 4.4, 28]} />
        <meshStandardMaterial
          color={isSelected ? '#4d5562' : colors.reactorBody}
          metalness={0.28}
          roughness={0.56}
        />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.56, 0.56, 2.4, 18]} />
        <meshStandardMaterial
          color={colors.reactorCore}
          emissive={colors.reactorCore}
          emissiveIntensity={0.42}
          metalness={0.08}
          ref={coreRef}
          roughness={0.5}
        />
      </mesh>

      <mesh castShadow position={[-2.48, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.98, 0.98, 0.34, 18]} />
        <meshStandardMaterial color="#707987" metalness={0.36} roughness={0.48} />
      </mesh>

      <mesh castShadow position={[2.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.06, 1.12, 0.44, 22]} />
        <meshStandardMaterial color="#676f7c" metalness={0.28} roughness={0.58} />
      </mesh>

      <mesh position={[-2.62, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.98, 0.08, 12, 30]} />
        <meshStandardMaterial color="#8e98a6" metalness={0.42} roughness={0.44} />
      </mesh>

      {[-1.45, -0.35, 0.75, 1.85].map((offset) => (
        <mesh key={`band-${offset}`} position={[offset, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[1.2, 0.035, 10, 24]} />
          <meshStandardMaterial color="#59616f" metalness={0.3} roughness={0.6} />
        </mesh>
      ))}

      {[
        [0.1, 1.2, 0],
        [0.2, -1.2, 0],
        [0.2, 0, 1.2],
        [0.2, 0, -1.2]
      ].map((drum) => (
        <mesh key={drum.join('-')} position={drum} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.16, 0.16, 0.8, 10]} />
          <meshStandardMaterial color="#6f7784" metalness={0.28} roughness={0.52} />
        </mesh>
      ))}

      {[ 
        [1.75, 0.65, 0.65],
        [1.75, -0.65, -0.65]
      ].map((strut) => (
        <mesh key={strut.join('-')} position={strut} rotation={[0.52, 0.28, 1.18]}>
          <cylinderGeometry args={[0.08, 0.08, 2.5, 8]} />
          <meshStandardMaterial color="#8d96a4" metalness={0.26} roughness={0.58} />
        </mesh>
      ))}

      <Pipe color="#8f99a7" position={[2.95, 0.58, 0.78]} rotation={[0.28, 0, Math.PI / 2]} length={2.35} radius={0.08} />
      <Pipe color="#8f99a7" position={[2.95, -0.58, -0.78]} rotation={[-0.28, 0, Math.PI / 2]} length={2.35} radius={0.08} />
      <Pipe color="#66707c" position={[-0.35, -1.45, 0]} rotation={[0, 0, Math.PI / 2]} length={1.65} radius={0.09} />
      <Pipe color="#66707c" position={[-0.35, 1.45, 0]} rotation={[0, 0, Math.PI / 2]} length={1.65} radius={0.09} />
    </group>
  )
}
