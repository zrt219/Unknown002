export default function CameraTools({
  cameraMode,
  cameraPanEnabled,
  onFitSelection,
  onResetView,
  onToggleCameraMode,
  onTogglePan
}) {
  return (
    <div className="camera-tools">
      <button className="secondary-button" onClick={onResetView} type="button">
        Reset View
      </button>
      <button className="secondary-button" onClick={onFitSelection} type="button">
        Fit to Selection
      </button>
      <button className="secondary-button" onClick={onTogglePan} type="button">
        Pan: {cameraPanEnabled ? 'On' : 'Off'}
      </button>
      <button
        className="secondary-button"
        onClick={onToggleCameraMode}
        type="button"
      >
        {cameraMode === 'free' ? 'Free Orbit' : 'Focus Lock'}
      </button>
    </div>
  )
}
