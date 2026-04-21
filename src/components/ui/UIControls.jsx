export default function UIControls({
  onResetModeDefaults,
  onResetSceneDefaults,
  speedLabels,
  toggleDefinitions,
  viewerState,
  onToggle,
  onSpeedChange
}) {
  const speedDescriptor =
    viewerState.animationSpeed <= speedLabels.slow
      ? 'Slow'
      : viewerState.animationSpeed >= speedLabels.fast
        ? 'Fast'
        : 'Nominal'

  return (
    <div className="controls-grid">
      {toggleDefinitions.map((group) => (
        <section className="control-group" key={group.group}>
          <h3>{group.group}</h3>
          <div className="control-group-items">
            {group.items.map((toggle) => {
              const disabled =
                toggle.dependsOn && !viewerState[toggle.dependsOn]

              return (
                <label
                  className={`toggle-row ${toggle.emphasized ? 'emphasized' : ''}`}
                  data-disabled={disabled ? 'true' : 'false'}
                  key={toggle.key}
                >
                  <span>{toggle.label}</span>
                  <input
                    aria-label={toggle.label}
                    checked={Boolean(viewerState[toggle.key])}
                    onChange={() => onToggle(toggle.key)}
                    type="checkbox"
                  />
                </label>
              )
            })}
          </div>
        </section>
      ))}

      {toggleDefinitions.length > 0 ? (
        <>
          <label className="slider-row">
            <span className="slider-copy">
              <span>Flow Animation Speed</span>
              <strong>
                {viewerState.animationSpeed.toFixed(1)}x | {speedDescriptor}
              </strong>
            </span>
            <input
              aria-label="Flow Animation Speed"
              max="1.8"
              min="0.2"
              onChange={(event) => onSpeedChange(Number(event.target.value))}
              step="0.1"
              type="range"
              value={viewerState.animationSpeed}
            />
          </label>

          <div className="reset-actions">
            <button
              className="secondary-button"
              onClick={onResetModeDefaults}
              type="button"
            >
              Reset Mode Defaults
            </button>
            <button
              className="secondary-button"
              onClick={onResetSceneDefaults}
              type="button"
            >
              Reset Scene Defaults
            </button>
          </div>
        </>
      ) : null}
    </div>
  )
}
