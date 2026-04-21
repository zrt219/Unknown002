export function getAnimationPresentation(sceneMode, viewerState) {
  return {
    showPlume:
      sceneMode === 'clean'
        ? viewerState.showPlume && Boolean(viewerState.selectedSubsystem)
        : viewerState.showPlume,
    showBraytonParticles:
      sceneMode === 'energy' && viewerState.showWorkingFluidParticles,
    reactorPulseWeight: sceneMode === 'clean' ? 0.55 : sceneMode === 'thermal' ? 0.75 : 1,
    lineOpacityMultiplier:
      sceneMode === 'thermal' ? 1.15 : sceneMode === 'energy' ? 1 : 0.88
  }
}
