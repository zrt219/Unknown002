import BraytonOverlay from './overlays/BraytonOverlay'
import EnergyFlowOverlay from './overlays/EnergyFlowOverlay'
import { getModePresentationProfile } from '../../modes/modePresentationProfiles'

export default function OverlayLayer({ animationPresentation, sceneMode, viewerState }) {
  const presentationProfile = getModePresentationProfile(sceneMode)
  const overlayTreatment = presentationProfile.overlayTreatment

  return (
    <group>
      <BraytonOverlay
        overlayTreatment={overlayTreatment}
        sceneMode={sceneMode}
        showWorkingFluidParticles={animationPresentation.showBraytonParticles}
        viewerState={viewerState}
      />
      <EnergyFlowOverlay
        animationPresentation={animationPresentation}
        overlayTreatment={overlayTreatment}
        sceneMode={sceneMode}
        viewerState={viewerState}
      />
    </group>
  )
}
