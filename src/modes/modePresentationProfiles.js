export const modePresentationProfiles = {
  clean: {
    key: 'clean',
    sceneTone: {
      shellClass: 'scene-mode-clean',
      accent: '#8fd8ff',
      environmentOpacityMultiplier: {
        earth: 1.12,
        sun: 1.08,
        galaxy: 1.05
      },
      lighting: {
        ambient: 1,
        hemisphere: 1,
        key: 1.08,
        fill: 0.92,
        rim: 1.2,
        exposure: 1.05
      }
    },
    spacecraftTreatment: {
      profile: 'clean',
      contrast: 'presentation-pbr',
      baseOpacity: 1,
      tintStrength: 'minimal'
    },
    overlayTreatment: {
      brayton: { visible: false, intensity: 0 },
      powerFlow: { visible: false, intensity: 0 },
      heatFlow: { visible: false, intensity: 0 },
      thermalPaths: { visible: false, intensity: 0 },
      particles: { scale: 0 }
    },
    annotationTreatment: {
      density: 'none',
      labelClass: 'clean',
      leaderLineOpacity: 0
    },
    uiTreatment: {
      panelVariant: 'presentation',
      showPresentationModes: false,
      showCaptureStudio: true,
      showCaptureStudioCompact: false,
      showCameraPresets: true,
      showAccessibilityNotes: false,
      modeCallout: 'Hero composition: Earth limb, fixed sunrise, and uncluttered spacecraft silhouette.'
    },
    cameraTreatment: {
      resetPreset: 'heroTechnical',
      intent: 'presentation-safe hero framing'
    }
  },
  engineering: {
    key: 'engineering',
    sceneTone: {
      shellClass: 'scene-mode-engineering',
      accent: '#7dd3fc',
      environmentOpacityMultiplier: {
        earth: 0.82,
        sun: 0.8,
        galaxy: 0.78
      },
      lighting: {
        ambient: 1.08,
        hemisphere: 1.08,
        key: 0.96,
        fill: 1.18,
        rim: 0.92,
        exposure: 1
      }
    },
    spacecraftTreatment: {
      profile: 'engineering',
      contrast: 'inspection-neutral',
      baseOpacity: 1,
      tintStrength: 'system-readable'
    },
    overlayTreatment: {
      brayton: { visible: false, intensity: 0 },
      powerFlow: { visible: false, intensity: 0 },
      heatFlow: { visible: false, intensity: 0 },
      thermalPaths: { visible: false, intensity: 0 },
      particles: { scale: 0.8 }
    },
    annotationTreatment: {
      density: 'full-architecture',
      labelClass: 'engineering',
      leaderLineOpacity: 0.9
    },
    uiTreatment: {
      panelVariant: 'inspection',
      showPresentationModes: false,
      showCaptureStudio: false,
      showCaptureStudioCompact: true,
      showCameraPresets: true,
      showAccessibilityNotes: true,
      modeCallout: 'Architecture mode: labels, mounts, boom logic, and subsystem placement stay foregrounded.'
    },
    cameraTreatment: {
      resetPreset: 'overviewThreeQuarter',
      intent: 'architecture-readable inspection framing'
    }
  },
  energy: {
    key: 'energy',
    sceneTone: {
      shellClass: 'scene-mode-energy',
      accent: '#facc15',
      environmentOpacityMultiplier: {
        earth: 0.42,
        sun: 0.62,
        galaxy: 0.5
      },
      lighting: {
        ambient: 0.72,
        hemisphere: 0.76,
        key: 0.82,
        fill: 0.78,
        rim: 0.9,
        exposure: 0.92
      }
    },
    spacecraftTreatment: {
      profile: 'energy',
      contrast: 'subdued-base-with-functional-emissive',
      baseOpacity: 0.92,
      tintStrength: 'energy-chain'
    },
    overlayTreatment: {
      brayton: { visible: true, intensity: 1.35 },
      powerFlow: { visible: true, intensity: 1.3 },
      heatFlow: { visible: true, intensity: 1.12 },
      thermalPaths: { visible: false, intensity: 0 },
      particles: { scale: 1.25 }
    },
    annotationTreatment: {
      density: 'functional-path',
      labelClass: 'energy',
      leaderLineOpacity: 0.45
    },
    uiTreatment: {
      panelVariant: 'energy',
      showPresentationModes: false,
      showCaptureStudio: false,
      showCaptureStudioCompact: true,
      showCameraPresets: true,
      showAccessibilityNotes: false,
      modeCallout: 'Energy mode: reactor heat, Brayton conversion, PMAD distribution, waste heat, and propulsion output.'
    },
    cameraTreatment: {
      resetPreset: 'energyFlowOverview',
      intent: 'Brayton and power-flow readable framing'
    }
  },
  thermal: {
    key: 'thermal',
    sceneTone: {
      shellClass: 'scene-mode-thermal',
      accent: '#fb923c',
      environmentOpacityMultiplier: {
        earth: 0.22,
        sun: 0.34,
        galaxy: 0.16
      },
      lighting: {
        ambient: 0.5,
        hemisphere: 0.52,
        key: 0.68,
        fill: 0.64,
        rim: 0.72,
        exposure: 0.82
      }
    },
    spacecraftTreatment: {
      profile: 'thermal',
      contrast: 'thermal-role-palette',
      baseOpacity: 0.95,
      tintStrength: 'thermal-dominant'
    },
    overlayTreatment: {
      brayton: { visible: false, intensity: 0 },
      powerFlow: { visible: false, intensity: 0 },
      heatFlow: { visible: true, intensity: 1.42 },
      thermalPaths: { visible: true, intensity: 1.5 },
      particles: { scale: 1.18 }
    },
    annotationTreatment: {
      density: 'thermal-role',
      labelClass: 'thermal',
      leaderLineOpacity: 0.38
    },
    uiTreatment: {
      panelVariant: 'thermal',
      showPresentationModes: false,
      showCaptureStudio: false,
      showCaptureStudioCompact: true,
      showCameraPresets: true,
      showAccessibilityNotes: false,
      modeCallout: 'Thermal mode: radiator dominance, shielded zone, and heat path realism are the primary story.'
    },
    cameraTreatment: {
      resetPreset: 'thermalStory',
      intent: 'radiator and heat-path dominant framing'
    }
  }
}

export function getModePresentationProfile(sceneMode) {
  return modePresentationProfiles[sceneMode] ?? modePresentationProfiles.clean
}
