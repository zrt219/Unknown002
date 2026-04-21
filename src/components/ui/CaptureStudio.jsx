export default function CaptureStudio({
  activeAssetKey,
  activeLabelProfile,
  cameraStateSummary,
  captureAssets,
  captureProfiles,
  hideHudForCapture,
  labelProfiles,
  onApplyCaptureAsset,
  onApplyCaptureProfile,
  onCopyCameraState,
  onResetCaptureDefaults,
  onSelectLabelProfile,
  onToggleCaptureSafeBackground,
  onToggleHideHudForCapture,
  presentationMode,
  captureSafeBackground
}) {
  return (
    <div className="controls-grid">
      <section className="control-group">
        <h3>Label Profiles</h3>
        <div className="capture-chip-grid">
          {labelProfiles.map((profile) => (
            <button
              aria-pressed={activeLabelProfile === profile.key}
              className={
                activeLabelProfile === profile.key
                  ? 'subsystem-chip active'
                  : 'subsystem-chip'
              }
              key={profile.key}
              onClick={() => onSelectLabelProfile(profile.key)}
              type="button"
            >
              <strong>{profile.label}</strong>
              <span>{profile.description}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="control-group">
        <h3>Capture Helpers</h3>
        <div className="control-group-items">
          {captureProfiles.map((profile) => (
            <button
              className={
                presentationMode === profile.presentationMode
                  ? 'subsystem-chip active'
                  : 'subsystem-chip'
              }
              key={profile.key}
              onClick={() => onApplyCaptureProfile(profile.key)}
              type="button"
            >
              <strong>{profile.label}</strong>
              <span>
                {profile.sceneMode} | {profile.cameraPreset}
              </span>
            </button>
          ))}
          <label className="toggle-row">
            <span>Hide HUD for Capture</span>
            <input
              aria-label="Hide HUD for Capture"
              checked={hideHudForCapture}
              onChange={onToggleHideHudForCapture}
              type="checkbox"
            />
          </label>
          <label className="toggle-row">
            <span>Capture-Safe Background</span>
            <input
              aria-label="Capture-Safe Background"
              checked={captureSafeBackground}
              onChange={onToggleCaptureSafeBackground}
              type="checkbox"
            />
          </label>
          <div className="reset-actions">
            <button className="secondary-button" onClick={onResetCaptureDefaults} type="button">
              Reset to Capture Defaults
            </button>
            <button className="secondary-button" onClick={onCopyCameraState} type="button">
              Copy Current Camera State
            </button>
          </div>
          <p className="section-helper">{cameraStateSummary}</p>
        </div>
      </section>

      <section className="control-group">
        <h3>Case-Study Assets</h3>
        <div className="capture-chip-grid">
          {captureAssets.map((asset) => (
            <button
              aria-pressed={activeAssetKey === asset.key}
              className={
                activeAssetKey === asset.key
                  ? 'subsystem-chip active'
                  : 'subsystem-chip'
              }
              key={asset.key}
              onClick={() => onApplyCaptureAsset(asset.key)}
              type="button"
            >
              <strong>{asset.title}</strong>
              <span>{asset.recommendedCameraPreset}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mode-note-card">
        <h3>Capture Checklist</h3>
        <ul className="mode-note-list">
          <li>Choose the case-study asset button before framing by hand.</li>
          <li>Use Capture Mode or Beauty Technical Mode for final stills.</li>
          <li>Enable Capture-Safe Background when labels need extra contrast.</li>
          <li>Hide the HUD only after the camera, labels, and environment are final.</li>
        </ul>
      </section>
    </div>
  )
}
