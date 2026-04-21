import { Stars } from '@react-three/drei'
import { useMemo } from 'react'
import {
  AdditiveBlending,
  CanvasTexture,
  ClampToEdgeWrapping,
  LinearFilter
} from 'three'
import EarthLimb, { useEarthLimbTextures } from './EarthLimb'
import { getModePresentationProfile } from '../../modes/modePresentationProfiles'

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

function createSeededRandom(seed) {
  let state = seed

  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }
}

function createSunDiscTexture() {
  return buildTexture(512, 512, (context, width, height) => {
    const centerX = width / 2
    const centerY = height / 2

    context.clearRect(0, 0, width, height)

    const disc = context.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      width * 0.32
    )
    disc.addColorStop(0, 'rgba(255, 255, 248, 1)')
    disc.addColorStop(0.45, 'rgba(255, 245, 220, 0.96)')
    disc.addColorStop(0.7, 'rgba(255, 206, 126, 0.72)')
    disc.addColorStop(1, 'rgba(255, 206, 126, 0)')

    context.fillStyle = disc
    context.fillRect(0, 0, width, height)
  })
}

function createSunHaloTexture() {
  return buildTexture(768, 768, (context, width, height) => {
    const centerX = width / 2
    const centerY = height / 2

    context.clearRect(0, 0, width, height)

    const halo = context.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      width * 0.46
    )
    halo.addColorStop(0, 'rgba(255, 247, 226, 0.9)')
    halo.addColorStop(0.16, 'rgba(255, 214, 156, 0.56)')
    halo.addColorStop(0.42, 'rgba(255, 171, 88, 0.2)')
    halo.addColorStop(1, 'rgba(255, 171, 88, 0)')

    context.fillStyle = halo
    context.fillRect(0, 0, width, height)
  })
}

function createSunStarburstTexture() {
  return buildTexture(768, 768, (context, width, height) => {
    const centerX = width / 2
    const centerY = height / 2

    context.clearRect(0, 0, width, height)

    const rays = [
      { angle: -0.08, width: 10, reach: 0.48, alpha: 0.58 },
      { angle: Math.PI - 0.08, width: 10, reach: 0.48, alpha: 0.58 },
      { angle: Math.PI / 2 + 0.12, width: 4, reach: 0.32, alpha: 0.28 },
      { angle: -Math.PI / 2 + 0.12, width: 4, reach: 0.32, alpha: 0.28 },
      { angle: Math.PI / 4, width: 3, reach: 0.28, alpha: 0.18 },
      { angle: -Math.PI / 4, width: 3, reach: 0.28, alpha: 0.18 }
    ]

    rays.forEach((ray) => {
      const outerX = centerX + Math.cos(ray.angle) * width * ray.reach
      const outerY = centerY + Math.sin(ray.angle) * height * ray.reach

      const gradient = context.createLinearGradient(centerX, centerY, outerX, outerY)
      gradient.addColorStop(0, `rgba(255, 240, 204, ${ray.alpha})`)
      gradient.addColorStop(0.28, `rgba(255, 204, 122, ${ray.alpha * 0.45})`)
      gradient.addColorStop(1, 'rgba(255, 204, 122, 0)')

      context.strokeStyle = gradient
      context.lineWidth = ray.width
      context.beginPath()
      context.moveTo(centerX, centerY)
      context.lineTo(outerX, outerY)
      context.stroke()
    })
  })
}

function createGalaxyTexture(primaryTint, secondaryTint) {
  return buildTexture(1536, 512, (context, width, height) => {
    const random = createSeededRandom(1902)

    context.clearRect(0, 0, width, height)

    const majorGradient = context.createLinearGradient(0, height * 0.72, width, height * 0.18)
    majorGradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
    majorGradient.addColorStop(0.18, 'rgba(244, 205, 176, 0.18)')
    majorGradient.addColorStop(0.45, 'rgba(255, 223, 198, 0.54)')
    majorGradient.addColorStop(0.7, 'rgba(206, 213, 255, 0.38)')
    majorGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

    context.save()
    context.translate(width / 2, height / 2)
    context.rotate(-0.3)
    context.fillStyle = majorGradient
    context.fillRect(-width * 0.62, -height * 0.16, width * 1.24, height * 0.32)
    context.restore()

    context.save()
    context.filter = 'blur(22px)'
    for (let index = 0; index < 50; index += 1) {
      const progress = index / 49
      const x = width * (0.06 + progress * 0.88)
      const y = height * (0.67 - progress * 0.42 + (random() - 0.5) * 0.12)
      const radius = 42 + random() * 78
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, `${primaryTint}66`)
      gradient.addColorStop(0.45, `${secondaryTint}40`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      context.fillStyle = gradient
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    }
    context.restore()

    for (let index = 0; index < 480; index += 1) {
      const x = random() * width
      const y = random() * height
      const alpha = random() * 0.55
      const radius = random() < 0.14 ? 1.8 : 0.9

      context.fillStyle =
        random() < 0.18
          ? `rgba(207, 218, 255, ${alpha})`
          : `rgba(255, 246, 236, ${alpha})`
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    }

    context.save()
    context.globalCompositeOperation = 'destination-out'
    context.filter = 'blur(18px)'
    for (let index = 0; index < 16; index += 1) {
      const progress = index / 15
      const x = width * (0.08 + progress * 0.84)
      const y = height * (0.68 - progress * 0.42 + (random() - 0.5) * 0.1)
      context.fillStyle = 'rgba(0, 0, 0, 0.24)'
      context.beginPath()
      context.ellipse(x, y, 80 + random() * 130, 7 + random() * 18, -0.25, 0, Math.PI * 2)
      context.fill()
    }
    context.restore()
  })
}

function getSceneOpacity(mapping, sceneMode, fallback = 1) {
  return mapping?.[sceneMode] ?? fallback
}

function GalaxyBand({ opacity, profile, texture }) {
  if (!profile?.visible || opacity <= 0.01) {
    return null
  }

  return (
    <mesh position={profile.position} rotation={profile.rotation} renderOrder={-25}>
      <planeGeometry args={profile.scale} />
      <meshBasicMaterial
        blending={AdditiveBlending}
        depthTest={false}
        depthWrite={false}
        map={texture}
        opacity={opacity}
        toneMapped={false}
        transparent
      />
    </mesh>
  )
}

function SunField({ opacity, profile, textures }) {
  if (!profile?.visible || opacity <= 0.01) {
    return null
  }

  return (
    <group position={profile.position} renderOrder={-20}>
      <sprite scale={profile.starburstScale ?? [profile.glowScale, profile.glowScale * 0.6, 1]} rotation={[0, 0, -0.08]}>
        <spriteMaterial
          blending={AdditiveBlending}
          color={profile.haloColor}
          depthTest={false}
          depthWrite={false}
          map={textures.starburst}
          opacity={opacity * (profile.starburstOpacity ?? 0.14)}
          toneMapped={false}
          transparent
        />
      </sprite>
      <sprite scale={[profile.glowScale, profile.glowScale, 1]}>
        <spriteMaterial
          blending={AdditiveBlending}
          color={profile.haloColor}
          depthTest={false}
          depthWrite={false}
          map={textures.halo}
          opacity={opacity * (profile.glowOpacity ?? 0.1)}
          toneMapped={false}
          transparent
        />
      </sprite>
      <sprite scale={[profile.haloScale, profile.haloScale, 1]}>
        <spriteMaterial
          blending={AdditiveBlending}
          color={profile.haloColor}
          depthTest={false}
          depthWrite={false}
          map={textures.halo}
          opacity={opacity * (profile.haloOpacity ?? 0.3)}
          toneMapped={false}
          transparent
        />
      </sprite>
      <sprite scale={[profile.discScale ?? profile.coreScale, profile.discScale ?? profile.coreScale, 1]}>
        <spriteMaterial
          blending={AdditiveBlending}
          color={profile.coreColor}
          depthTest={false}
          depthWrite={false}
          map={textures.disc}
          opacity={opacity * (profile.discOpacity ?? 1)}
          toneMapped={false}
          transparent
        />
      </sprite>
    </group>
  )
}

export default function SceneEnvironment({
  captureSafeBackground = false,
  environmentProfile,
  sceneMode
}) {
  const presentationProfile = getModePresentationProfile(sceneMode)
  const environmentMultiplier =
    presentationProfile.sceneTone.environmentOpacityMultiplier
  const earthTextures = useEarthLimbTextures(environmentProfile.earth.presentation)
  const sunTextures = useMemo(
    () => ({
      disc: createSunDiscTexture(),
      halo: createSunHaloTexture(),
      starburst: createSunStarburstTexture()
    }),
    []
  )
  const galaxyTexture = useMemo(
    () =>
      createGalaxyTexture(
        environmentProfile.galaxyBand?.primaryTint ?? '#f1cdb3',
        environmentProfile.galaxyBand?.secondaryTint ?? '#c8d0ff'
      ),
    [environmentProfile.galaxyBand?.primaryTint, environmentProfile.galaxyBand?.secondaryTint]
  )

  const earthOpacity = useMemo(() => {
    if (!environmentProfile.earth.visible) {
      return 0
    }

    const baseOpacity = getSceneOpacity(environmentProfile.earth.sceneOpacity, sceneMode, 1)

    const modeOpacity = baseOpacity * environmentMultiplier.earth

    return captureSafeBackground ? modeOpacity * 0.55 : modeOpacity
  }, [captureSafeBackground, environmentMultiplier.earth, environmentProfile.earth, sceneMode])

  const sunOpacity = useMemo(
    () => {
      const baseOpacity = getSceneOpacity(environmentProfile.sun?.sceneOpacity, sceneMode, 0)
      const modeOpacity = baseOpacity * environmentMultiplier.sun

      return captureSafeBackground ? modeOpacity * 0.52 : modeOpacity
    },
    [captureSafeBackground, environmentMultiplier.sun, environmentProfile.sun, sceneMode]
  )

  const galaxyOpacity = useMemo(
    () => {
      const baseOpacity = getSceneOpacity(environmentProfile.galaxyBand?.sceneOpacity, sceneMode, 0)
      const modeOpacity = baseOpacity * environmentMultiplier.galaxy

      return captureSafeBackground ? modeOpacity * 0.4 : modeOpacity
    },
    [captureSafeBackground, environmentMultiplier.galaxy, environmentProfile.galaxyBand, sceneMode]
  )

  return (
    <>
      <color args={[environmentProfile.background]} attach="background" />

      {(environmentProfile.starLayers ?? [environmentProfile.stars]).map((layer, index) => (
        <Stars
          count={layer.count}
          depth={layer.depth}
          factor={layer.factor}
          fade
          key={`stars-${environmentProfile.key}-${index}`}
          radius={layer.radius}
          speed={layer.speed}
        />
      ))}

      <GalaxyBand
        opacity={galaxyOpacity}
        profile={environmentProfile.galaxyBand}
        texture={galaxyTexture}
      />
      <SunField
        opacity={sunOpacity}
        profile={environmentProfile.sun}
        textures={sunTextures}
      />
      <EarthLimb
        cloudTexture={earthTextures.cloudTexture}
        opacity={earthOpacity}
        profile={environmentProfile.earth}
        sceneMode={sceneMode}
        surfaceTexture={earthTextures.surfaceTexture}
      />
    </>
  )
}
