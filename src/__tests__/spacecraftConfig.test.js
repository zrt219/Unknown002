import { describe, expect, it } from 'vitest'
import {
  braytonOverlay,
  cameraControlDefaults,
  cameraControlTuning,
  cameraPresetGroups,
  cameraPresets,
  inspectionSubsystemOrder,
  projectIdentity,
  spacecraftStructure,
  subsystemOrder,
  subsystems,
  toggleDefinitions,
  uiDefaults
} from '../data/spacecraftConfig'
import { caseStudyCapturePlan, captureProfiles } from '../data/capturePlan'
import {
  SCENE_MODE_DEFAULT_ENVIRONMENT,
  SCENE_MODE_ORDER
} from '../modes/sceneModeTypes'
import { sceneModeConfig } from '../modes/sceneModeConfig'
import {
  getModePresentationProfile,
  modePresentationProfiles
} from '../modes/modePresentationProfiles'
import {
  environmentConfig,
  orbitalBaseScene,
  orbitalSceneBible
} from '../environments/environmentConfig'
import {
  perModeLightAdjustments,
  sunLightRig
} from '../environments/sunLightRig'
import { earthPresentationConfig } from '../environments/earthPresentationConfig'
import {
  modeCameraProfiles,
  orbitalCompositionLock,
  screenshotFramingConfig
} from '../systems/orbitalCameraProfiles'
import { getResetCameraPreset } from '../systems/modeCameraSystem'
import {
  LABEL_PROFILE_ORDER,
  labelProfileConfig
} from '../presentation/labelProfiles'
import {
  PRESENTATION_MODE_ORDER,
  presentationModeConfig
} from '../presentation/presentationModeConfig'

describe('spacecraftConfig', () => {
  it('defines the required subsystem order and camera presets', () => {
    expect(subsystemOrder).toEqual([
      'reactor',
      'shield',
      'braytonPowerUnit',
      'radiators',
      'separationBoom',
      'spacecraftBus',
      'propellantTanks',
      'sciencePayload',
      'electricThrusters'
    ])

    expect(Object.keys(cameraPresets)).toEqual([
      'overviewSide',
      'overviewThreeQuarter',
      'overviewPlan',
      'energyFlowOverview',
      'reactorClose',
      'shieldClose',
      'braytonUnitClose',
      'radiatorRootClose',
      'radiatorOverview',
      'boomStructureClose',
      'busSystemsClose',
      'tanksPmadClose',
      'thrusterClusterClose',
      'payloadClose',
      'heroTechnical',
      'cleanSidePresentation',
      'thermalStory',
      'propulsionStory'
    ])

    expect(cameraPresetGroups).toHaveLength(3)
    expect(cameraPresets.heroTechnical).toMatchObject({
      fov: expect.any(Number),
      lockPan: expect.any(Boolean),
      recommendedSceneMode: 'clean',
      recommendedOverlaySet: 'No overlays'
    })

    expect(inspectionSubsystemOrder).toEqual([
      'reactor',
      'shield',
      'braytonPowerUnit',
      'radiators',
      'separationBoom',
      'spacecraftBus',
      'pmad',
      'propellantTanks',
      'sciencePayload',
      'electricThrusters'
    ])

    expect(uiDefaults).toMatchObject({
      showLabels: false,
      showBraytonOverlay: false,
      showWorkingFluidParticles: true,
      showHeatArrows: false,
      showPowerFlow: false,
      showShieldCone: false,
      showPlume: true,
      showGrid: false,
      paused: false,
      animationSpeed: 1,
      activeCameraPreset: 'heroTechnical',
      sceneMode: 'clean',
      environmentMode: 'earth-orbit',
      autoFollowModeScene: true,
      presentationMode: 'review',
      labelProfile: 'auto'
    })

    expect(projectIdentity.fullTitle).toBe('ZRT UNKNOWN02 Technical Viewer')

    expect(cameraControlDefaults).toMatchObject({
      cameraMode: 'free',
      cameraPanEnabled: true
    })

    expect(cameraControlTuning).toMatchObject({
      dampingFactor: expect.any(Number),
      rotateSpeed: expect.any(Number),
      zoomSpeed: expect.any(Number),
      panSpeed: expect.any(Number),
      minDistance: expect.any(Number),
      maxDistance: expect.any(Number)
    })

    expect(
      toggleDefinitions.flatMap((group) =>
        group.items.map((toggle) => toggle.key)
      )
    ).toContain('showWorkingFluidParticles')
  })

  it('defines subsystem inspection copy and continuity metadata', () => {
    expect(subsystems.pmad).toMatchObject({
      id: 'pmad',
      label: 'Power Management and Distribution',
      cameraPreset: 'tanksPmadClose',
      focusTarget: expect.any(Array),
      colorMeaning: expect.stringMatching(/electric|yellow/i),
      purpose: expect.stringMatching(/electric power/i),
      placementRationale: expect.stringMatching(/bus/i),
      realismNote: expect.stringMatching(/conditioning|distribution/i),
      relatedEnergyFlow: expect.stringMatching(/generator|bus|thruster/i)
    })

    expect(spacecraftStructure.boom).toMatchObject({
      segments: expect.any(Number),
      spacing: expect.any(Number),
      length: expect.any(Number)
    })
    expect(spacecraftStructure.axialLinks.length).toBeGreaterThanOrEqual(4)
    expect(spacecraftStructure.harnessRoutes.length).toBeGreaterThanOrEqual(2)
    expect(spacecraftStructure.forwardSection.boomAdapterStruts.length).toBeGreaterThanOrEqual(4)
    expect(spacecraftStructure.forwardSection.pmadHarnessRoutes.length).toBeGreaterThanOrEqual(3)
    expect(spacecraftStructure.forwardSection.pmadRack.modules.length).toBeGreaterThanOrEqual(3)
    expect(spacecraftStructure.forwardSection.pmadRack.connectorRoutes.length).toBeGreaterThanOrEqual(2)
    expect(spacecraftStructure.forwardSection.propellantFeedRoutes.length).toBeGreaterThanOrEqual(2)
    expect(spacecraftStructure.forwardSection.tankSaddles.length).toBeGreaterThanOrEqual(4)
    expect(spacecraftStructure.forwardSection.payloadMount.struts.length).toBeGreaterThanOrEqual(2)
    expect(spacecraftStructure.forwardSection.payloadMount.backboneLength).toBeGreaterThan(1)
    expect(spacecraftStructure.propulsionFrame.clusterRoot.scale[0]).toBeGreaterThan(0.5)
    expect(spacecraftStructure.propulsionFrame.thrusterOffsets).toHaveLength(4)
  })

  it('defines route groups and thermodynamic stages for prompt 03 overlays', () => {
    expect(braytonOverlay.stageLabels).toMatchObject({
      compressor: 'Compressor: P up, T up',
      heatInput: 'Qin at high pressure',
      turbine: 'Turbine: P down, T down',
      alternator: 'Alternator / Generator',
      electricOutput: 'Electric Output',
      heatRejection: 'Qout to Radiators'
    })

    expect(braytonOverlay.workingFluidStages).toEqual([
      'cold',
      'compressed',
      'hot',
      'expanded',
      'cooled'
    ])

    expect(braytonOverlay.loopRoute.length).toBeGreaterThanOrEqual(4)
    expect(braytonOverlay.powerRoutes.generatorToPmad.length).toBeGreaterThanOrEqual(2)
    expect(braytonOverlay.powerRoutes.pmadToBus.length).toBeGreaterThanOrEqual(2)
    expect(braytonOverlay.powerRoutes.pmadToThrusters.length).toBeGreaterThanOrEqual(2)
    expect(braytonOverlay.heatRoutes.toRadiators.length).toBeGreaterThanOrEqual(2)
    expect(braytonOverlay.heatRoutes.radiatorReject.length).toBeGreaterThanOrEqual(2)
  })

  it('defines the four scene modes and three environment profiles', () => {
    expect(SCENE_MODE_ORDER).toEqual([
      'clean',
      'engineering',
      'energy',
      'thermal'
    ])

    expect(Object.keys(sceneModeConfig)).toEqual([
      'clean',
      'engineering',
      'energy',
      'thermal'
    ])
    expect(Object.keys(modePresentationProfiles)).toEqual([
      'clean',
      'engineering',
      'energy',
      'thermal'
    ])

    expect(Object.keys(environmentConfig)).toEqual([
      'deep-space',
      'earth-orbit',
      'thermal-analysis'
    ])

    expect(SCENE_MODE_DEFAULT_ENVIRONMENT).toEqual({
      clean: 'earth-orbit',
      engineering: 'deep-space',
      energy: 'deep-space',
      thermal: 'thermal-analysis'
    })

    expect(environmentConfig['earth-orbit']).toMatchObject({
      label: 'Earth Orbit',
      sun: expect.objectContaining({
        visible: true,
        lightPosition: expect.any(Array),
        sceneOpacity: expect.any(Object)
      }),
      galaxyBand: expect.objectContaining({
        visible: true
      })
    })
    expect(environmentConfig['earth-orbit'].starLayers.length).toBeGreaterThanOrEqual(2)
    expect(environmentConfig['earth-orbit'].earth.radius).toBeGreaterThan(80)
    expect(environmentConfig['deep-space'].galaxyBand.visible).toBe(true)
    expect(environmentConfig['thermal-analysis'].sun.visible).toBe(true)
    expect(orbitalSceneBible.fixedElements).toContain('Earth limb position and curvature')
    expect(environmentConfig['deep-space'].earth.position).toEqual(orbitalBaseScene.earth.position)
    expect(environmentConfig['earth-orbit'].earth.position).toEqual(orbitalBaseScene.earth.position)
    expect(environmentConfig['thermal-analysis'].earth.position).toEqual(orbitalBaseScene.earth.position)
    expect(environmentConfig['deep-space'].sun.lightPosition).toEqual(sunLightRig.lightPosition)
    expect(environmentConfig['earth-orbit'].sun.lightPosition).toEqual(sunLightRig.lightPosition)
    expect(environmentConfig['thermal-analysis'].sun.lightPosition).toEqual(sunLightRig.lightPosition)
    expect(perModeLightAdjustments.clean.key).toBeGreaterThan(perModeLightAdjustments.thermal.key)
    expect(environmentConfig['earth-orbit'].earth.presentation).toMatchObject({
      atmosphere: expect.objectContaining({
        innerScale: expect.any(Number),
        outerScale: expect.any(Number),
        limbScale: expect.any(Number)
      }),
      cloudDeck: expect.objectContaining({
        scale: expect.any(Number),
        opacityByMode: expect.any(Object)
      }),
      terminator: expect.objectContaining({
        direction: sunLightRig.lightPosition,
        cityLightOpacity: expect.any(Number)
      })
    })
    expect(earthPresentationConfig.atmosphere.opacityByMode.clean).toBeGreaterThan(
      earthPresentationConfig.atmosphere.opacityByMode.thermal
    )
  })

  it('defines reset behavior and curated UI contracts per scene mode', () => {
    expect(sceneModeConfig.clean).toMatchObject({
      label: 'Clean View',
      defaultCameraPreset: 'heroTechnical',
      presentation: expect.objectContaining({
        spacecraftTreatment: expect.objectContaining({
          profile: 'clean'
        }),
        uiTreatment: expect.objectContaining({
          panelVariant: 'presentation',
          showCaptureStudio: true
        })
      }),
      uiSections: expect.objectContaining({
        subsystemDirectory: false,
        legend: false
      })
    })

    expect(sceneModeConfig.engineering).toMatchObject({
      label: 'Engineering View',
      defaultEnvironment: 'deep-space',
      presentation: expect.objectContaining({
        annotationTreatment: expect.objectContaining({
          density: 'full-architecture'
        })
      }),
      uiSections: expect.objectContaining({
        subsystemDirectory: true,
        subsystemCard: true
      })
    })

    expect(sceneModeConfig.energy).toMatchObject({
      label: 'Energy View',
      defaultCameraPreset: 'energyFlowOverview',
      presentation: expect.objectContaining({
        overlayTreatment: expect.objectContaining({
          brayton: expect.objectContaining({ visible: true }),
          powerFlow: expect.objectContaining({ visible: true }),
          heatFlow: expect.objectContaining({ visible: true })
        }),
        spacecraftTreatment: expect.objectContaining({
          profile: 'energy'
        })
      }),
      overlays: expect.objectContaining({
        brayton: true,
        powerFlow: true,
        heatFlow: true
      })
    })

    expect(sceneModeConfig.thermal).toMatchObject({
      label: 'Thermal View',
      presentation: expect.objectContaining({
        overlayTreatment: expect.objectContaining({
          thermalPaths: expect.objectContaining({ visible: true })
        }),
        spacecraftTreatment: expect.objectContaining({
          profile: 'thermal'
        })
      }),
      overlays: expect.objectContaining({
        thermalPaths: true,
        thermalMaterials: true,
        radiatorEmphasis: true
      })
    })

    expect(modeCameraProfiles).toMatchObject({
      clean: { resetPreset: 'heroTechnical' },
      engineering: { resetPreset: 'overviewThreeQuarter' },
      energy: { resetPreset: 'energyFlowOverview' },
      thermal: { resetPreset: 'thermalStory' }
    })
    Object.values(modeCameraProfiles).forEach((profile) => {
      expect(cameraPresets[profile.resetPreset]).toBeDefined()
    })
    expect(getResetCameraPreset('clean')).toBe('heroTechnical')
    expect(getResetCameraPreset('engineering')).toBe('overviewThreeQuarter')
    expect(getResetCameraPreset('energy')).toBe('energyFlowOverview')
    expect(getResetCameraPreset('thermal')).toBe('thermalStory')
    expect(orbitalCompositionLock.baselinePreset).toBe('heroTechnical')
    expect(screenshotFramingConfig.hero.preset).toBe('heroTechnical')
    expect(cameraPresets.heroTechnical).toMatchObject({
      fov: expect.any(Number),
      lockPan: expect.any(Boolean),
      recommendedSceneMode: 'clean',
      recommendedLabelProfile: 'none'
    })
    expect(getModePresentationProfile('energy')).toMatchObject({
      sceneTone: expect.objectContaining({
        accent: '#facc15'
      }),
      uiTreatment: expect.objectContaining({
        panelVariant: 'energy',
        showCaptureStudio: false
      })
    })
    expect(getModePresentationProfile('thermal')).toMatchObject({
      sceneTone: expect.objectContaining({
        accent: '#fb923c'
      }),
      annotationTreatment: expect.objectContaining({
        density: 'thermal-role'
      })
    })
  })

  it('defines presentation modes, label profiles, and capture assets for prompt 11', () => {
    expect(PRESENTATION_MODE_ORDER).toEqual([
      'review',
      'capture',
      'diagram',
      'beautyTechnical'
    ])

    expect(Object.keys(presentationModeConfig)).toEqual([
      'review',
      'capture',
      'diagram',
      'beautyTechnical'
    ])

    expect(LABEL_PROFILE_ORDER).toEqual([
      'auto',
      'full-engineering',
      'reduced-review',
      'capture',
      'none'
    ])

    expect(labelProfileConfig['reduced-review'].label).toBe('Reduced Review Labels')
    expect(Object.keys(captureProfiles)).toEqual([
      'cleanHero',
      'engineeringAnnotated',
      'energyExplainer',
      'thermalExplainer'
    ])
    expect(caseStudyCapturePlan).toHaveLength(10)
    expect(caseStudyCapturePlan[0]).toMatchObject({
      title: 'Full Overview Side',
      recommendedSceneMode: 'clean',
      recommendedCameraPreset: 'overviewSide',
      labelProfile: 'none'
    })
  })
})
