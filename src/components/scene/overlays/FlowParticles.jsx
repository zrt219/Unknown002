import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function toVectors(points) {
  return points.map((point) => new THREE.Vector3(...point))
}

function toCurve(points, closed = false) {
  return new THREE.CatmullRomCurve3(
    toVectors(points),
    closed,
    'catmullrom',
    0.18
  )
}

export function createCurve(points, closed = false) {
  return toCurve(points, closed)
}

export default function FlowParticles({
  color,
  count = 4,
  opacity = 0.9,
  paused,
  radius = 0.08,
  route,
  speed = 0.18,
  startOffset = 0,
  visible = true
}) {
  const particlesRef = useRef([])
  const curve = useMemo(() => toCurve(route), [route])

  useFrame(({ clock }) => {
    if (!visible) {
      return
    }

    const baseTime = paused ? 0 : clock.elapsedTime * speed

    particlesRef.current.forEach((particle, index) => {
      if (!particle) {
        return
      }

      const t = (baseTime + startOffset + index / count) % 1
      const point = curve.getPointAt(t)
      particle.position.copy(point)
    })
  })

  return (
    <group visible={visible}>
      {Array.from({ length: count }).map((_, index) => (
        <mesh
          key={`${color}-${index}`}
          ref={(node) => {
            particlesRef.current[index] = node
          }}
        >
          <sphereGeometry args={[radius, 12, 12]} />
          <meshBasicMaterial color={color} opacity={opacity} transparent />
        </mesh>
      ))}
    </group>
  )
}
