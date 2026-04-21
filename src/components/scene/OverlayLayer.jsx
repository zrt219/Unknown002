import BraytonOverlay from './overlays/BraytonOverlay'
import EnergyFlowOverlay from './overlays/EnergyFlowOverlay'

export default function OverlayLayer({ animationPresentation, sceneMode, viewerState }) {
  return (
    <group>
      <BraytonOverlay
        sceneMode={sceneMode}
        showWorkingFluidParticles={animationPresentation.showBraytonParticles}
        viewerState={viewerState}
      />
      <EnergyFlowOverlay
        animationPresentation={animationPresentation}
        sceneMode={sceneMode}
        viewerState={viewerState}
      />
    </group>
  )
}
