import { useMemo } from 'react'
import {
  AdditiveBlending,
  CanvasTexture,
  ClampToEdgeWrapping,
  LinearFilter
} from 'three'

function createSeededRandom(seed) {
  let state = seed

  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }
}

function buildTexture(width, height, painter) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')

  painter(context, width, height)

  const texture = new CanvasTexture(canvas)
  texture.wrapS = ClampToEdgeWrapping
  texture.wrapT = ClampToEdgeWrapping
  texture.minFilter = LinearFilter
  texture.magFilter = LinearFilter
  texture.needsUpdate = true

  return texture
}

function createEarthSurfaceTexture(presentation) {
  const random = createSeededRandom(presentation.texture.seed)

  return buildTexture(1024, 1024, (context, width, height) => {
    context.clearRect(0, 0, width, height)

    const oceanGradient = context.createRadialGradient(
      width * 0.34,
      height * 0.3,
      width * 0.08,
      width * 0.58,
      height * 0.58,
      width * 0.72
    )
    oceanGradient.addColorStop(0, presentation.texture.oceanDay)
    oceanGradient.addColorStop(0.5, '#0f2342')
    oceanGradient.addColorStop(0.82, '#07111f')
    oceanGradient.addColorStop(1, presentation.texture.oceanNight)
    context.fillStyle = oceanGradient
    context.fillRect(0, 0, width, height)

    const terminator = context.createLinearGradient(0, 0, width, height)
    terminator.addColorStop(0, 'rgba(255, 230, 184, 0.12)')
    terminator.addColorStop(0.46, 'rgba(0, 0, 0, 0)')
    terminator.addColorStop(0.72, `rgba(0, 0, 0, ${presentation.terminator.nightOpacity})`)
    terminator.addColorStop(1, 'rgba(0, 0, 0, 0.82)')

    context.save()
    context.globalAlpha = 0.34
    for (let index = 0; index < 28; index += 1) {
      const x = width * (0.12 + random() * 0.76)
      const y = height * (0.16 + random() * 0.64)
      const radiusX = 32 + random() * 126
      const radiusY = 14 + random() * 62
      const rotation = random() * Math.PI

      context.translate(x, y)
      context.rotate(rotation)
      context.fillStyle =
        random() < 0.58 ? presentation.texture.landDay : presentation.texture.landWarm
      context.beginPath()
      context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2)
      context.fill()
      context.setTransform(1, 0, 0, 1, 0, 0)
    }
    context.restore()

    context.save()
    context.globalCompositeOperation = 'multiply'
    context.fillStyle = terminator
    context.fillRect(0, 0, width, height)
    context.restore()

    context.save()
    context.globalAlpha = presentation.terminator.cityLightOpacity
    context.filter = 'blur(0.8px)'
    for (let index = 0; index < 2600; index += 1) {
      const x = width * (0.1 + random() * 0.8)
      const y = height * (0.45 + random() * 0.42)
      const darkness = Math.max(0, (x + y - width * 0.94) / (width * 0.7))

      if (darkness <= 0.06) {
        continue
      }

      const radius = random() < 0.12 ? 1.6 : 0.8
      context.globalAlpha = Math.min(0.55, darkness * presentation.terminator.cityLightOpacity)
      context.fillStyle = presentation.texture.cityLightColor
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    }
    context.restore()
  })
}

function createCloudTexture(presentation) {
  const random = createSeededRandom(presentation.texture.cloudSeed)

  return buildTexture(1024, 1024, (context, width, height) => {
    context.clearRect(0, 0, width, height)
    context.save()
    context.globalAlpha = 0.32
    context.filter = 'blur(8px)'

    for (let band = 0; band < 9; band += 1) {
      const y = height * (0.22 + band * 0.07 + (random() - 0.5) * 0.04)
      const rotation = -0.22 + random() * 0.2

      context.save()
      context.translate(width * 0.5, y)
      context.rotate(rotation)

      for (let index = 0; index < 14; index += 1) {
        const x = -width * 0.48 + index * width * 0.075 + random() * 32
        const radiusX = 34 + random() * 92
        const radiusY = 7 + random() * 20
        context.fillStyle = presentation.texture.cloudColor
        context.beginPath()
        context.ellipse(x, 0, radiusX, radiusY, 0, 0, Math.PI * 2)
        context.fill()
      }

      context.restore()
    }

    context.restore()
  })
}

function getSceneOpacity(mapping, sceneMode, fallback = 1) {
  return mapping?.[sceneMode] ?? fallback
}

export default function EarthLimb({
  cloudTexture,
  opacity,
  profile,
  sceneMode,
  surfaceTexture
}) {
  if (!profile?.visible || opacity <= 0.01) {
    return null
  }

  const presentation = profile.presentation
  const atmosphereOpacity = getSceneOpacity(profile.atmosphereOpacity, sceneMode, 0.32)
  const cloudOpacity = getSceneOpacity(
    presentation.cloudDeck.opacityByMode,
    sceneMode,
    0.2
  )

  return (
    <group position={profile.position} rotation={profile.rotation ?? [0, 0, 0]}>
      <mesh renderOrder={-22}>
        <sphereGeometry args={[profile.radius, 128, 128]} />
        <meshBasicMaterial
          map={surfaceTexture}
          opacity={opacity}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh scale={presentation.cloudDeck.scale} renderOrder={-21.8}>
        <sphereGeometry args={[profile.radius, 128, 128]} />
        <meshBasicMaterial
          map={cloudTexture}
          opacity={opacity * cloudOpacity}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh scale={presentation.atmosphere.innerScale} renderOrder={-21}>
        <sphereGeometry args={[profile.radius, 128, 128]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color={presentation.atmosphere.color}
          opacity={opacity * atmosphereOpacity}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh scale={presentation.atmosphere.outerScale} renderOrder={-20.9}>
        <sphereGeometry args={[profile.radius, 128, 128]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color={presentation.atmosphere.rimColor}
          opacity={opacity * atmosphereOpacity * 0.24}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh scale={presentation.atmosphere.limbScale} renderOrder={-20.8}>
        <sphereGeometry args={[profile.radius, 128, 128]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color={presentation.atmosphere.limbColor}
          opacity={opacity * atmosphereOpacity * 0.11}
          toneMapped={false}
          transparent
        />
      </mesh>
    </group>
  )
}

export function useEarthLimbTextures(presentation) {
  const surfaceTexture = useMemo(
    () => createEarthSurfaceTexture(presentation),
    [presentation]
  )
  const cloudTexture = useMemo(
    () => createCloudTexture(presentation),
    [presentation]
  )

  return { cloudTexture, surfaceTexture }
}
