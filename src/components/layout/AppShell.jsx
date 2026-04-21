export default function AppShell({
  activePresetLabel,
  accessibilityNotes,
  cameraActions,
  controls,
  cameraControls,
  captureStudio,
  energyInset,
  environmentControls,
  hideHudForCapture,
  inspectionList,
  legend,
  modeControls,
  metadata,
  onShowHud,
  presentationControls,
  sectionVisibility,
  selectedSubsystem,
  statusNote,
  subsystemCard,
  thermalNotes,
  scene
}) {
  return (
    <div className={`app-shell ${hideHudForCapture ? 'capture-ui-hidden' : ''}`}>
      <div className="viewer-stage">
        {scene}
        {hideHudForCapture ? (
          <button className="capture-restore-button" onClick={onShowHud} type="button">
            Show HUD
          </button>
        ) : null}
      </div>

      {!hideHudForCapture ? (
        <aside className="hud-panel">
          <header className="hud-header">
            <p className="eyebrow">Nuclear-electric propulsion concept viewer</p>
            <h1>{metadata.title}</h1>
            <p className="lede">{metadata.subtitle}</p>
          </header>

          <section className="hud-section">
            <h2>Scene Modes</h2>
            {modeControls}
          </section>

          <section className="hud-section">
            <h2>Presentation Modes</h2>
            {presentationControls}
          </section>

          <section className="hud-section">
            <h2>Scene Environment</h2>
            {environmentControls}
          </section>

          {sectionVisibility.viewerControls ? (
            <section className="hud-section">
              <h2>Viewer Controls</h2>
              {controls}
            </section>
          ) : null}

          {sectionVisibility.subsystemDirectory ? (
            <section className="hud-section">
              <h2>Subsystem Directory</h2>
              {inspectionList}
            </section>
          ) : null}

          <section className="hud-section">
            <h2>Camera Presets</h2>
            {cameraControls}
            {cameraActions}
          </section>

          <section className="hud-section">
            <h2>Capture Studio</h2>
            {captureStudio}
          </section>

          {sectionVisibility.subsystemCard ? (
            <section className="hud-section">
              <h2>Selected Subsystem</h2>
              {subsystemCard}
            </section>
          ) : null}

          {energyInset ? (
            <section className="hud-section">
              {energyInset}
            </section>
          ) : null}

          {thermalNotes ? (
            <section className="hud-section">
              {thermalNotes}
            </section>
          ) : null}

          {sectionVisibility.legend ? (
            <section className="hud-section">
              {legend}
            </section>
          ) : null}

          <section className="hud-section status-panel">
            <h2>Inspection Status</h2>
            <div className="status-grid">
              <div>
                <span className="status-label">Active View</span>
                <strong>{activePresetLabel}</strong>
              </div>
              <div>
                <span className="status-label">Selected Subsystem</span>
                <strong>{selectedSubsystem?.label ?? 'Overview'}</strong>
              </div>
            </div>
            <p className="status-note">
              {selectedSubsystem ? selectedSubsystem.note : statusNote}
            </p>
          </section>

          {sectionVisibility.accessibilityNotes ? (
            <section className="hud-section">
              <h2>Accessibility Notes</h2>
              <ul className="note-list">
                {accessibilityNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <footer className="hud-footer">{metadata.credit}</footer>
        </aside>
      ) : null}
    </div>
  )
}
