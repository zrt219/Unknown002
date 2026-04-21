import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { colors } from '../../../data/spacecraftConfig'

export default function Thruster({
  animationSpeed,
  paused,
  position = [0, 0, 0],
  showPlume
}) {
  const plumeInnerRef = useRef(null)
  const plumeInnerMaterialRef = useRef(null)
  const plumeOuterMaterialRef = useRef(null)

  useFrame(({ clock }) => {
    if (!plumeInnerRef.current || !plumeInnerMaterialRef.current) {
      return
    }

    const pulse = paused
      ? 0.5
      : 0.5 + Math.sin(clock.elapsedTime * animationSpeed * 1.8) * 0.08

    plumeInnerRef.current.scale.set(
      0.92 + pulse * 0.12,
      0.92 + pulse * 0.18,
      0.92 + pulse * 0.12
    )
    plumeInnerMaterialRef.current.opacity = showPlume ? 0.11 + pulse * 0.08 : 0

    if (plumeOuterMaterialRef.current) {
      plumeOuterMaterialRef.current.opacity = showPlume ? 0.08 : 0
    }
  })

  return (
    <group position={position}>
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.28, 0.34, 1.1, 16]} />
        <meshStandardMaterial color={colors.thruster} metalness={0.48} roughness={0.42} />
      </mesh>
      <mesh castShadow position={[-0.18, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.31, 0.31, 0.18, 16]} />
        <meshStandardMaterial color="#909baa" metalness={0.34} roughness={0.46} />
      </mesh>
      <mesh castShadow position={[-0.55, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.28, 0.05, 10, 20]} />
        <meshStandardMaterial color="#9aa5b5" metalness={0.44} roughness={0.4} />
      </mesh>
      <mesh castShadow position={[0.16, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.16, 12]} />
        <meshStandardMaterial color="#65707d" metalness={0.42} roughness={0.44} />
      </mesh>
      <mesh position={[0.65, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 1.4, 1.1]}>
        <coneGeometry args={[0.42, 1.5, 16]} />
        <meshBasicMaterial
          color={colors.plume}
          opacity={showPlume ? 0.08 : 0}
          ref={plumeOuterMaterialRef}
          transparent
        />
      </mesh>
      <mesh ref={plumeInnerRef} position={[1.35, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.26, 1.2, 16]} />
        <meshBasicMaterial
          color={new THREE.Color(colors.plume)}
          opacity={showPlume ? 0.15 : 0}
          ref={plumeInnerMaterialRef}
          transparent
        />
      </mesh>
    </group>
  )
}
