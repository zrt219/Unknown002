export default function SceneEnvironmentControls({
  autoFollowModeScene,
  environmentMode,
  environmentOptions,
  recommendation,
  onSelectEnvironment,
  onToggleAutoFollow
}) {
  return (
    <div className="environment-controls">
      <div className="environment-grid" role="radiogroup" aria-label="Orbital scene treatment">
        {environmentOptions.map((option) => (
          <label className="environment-option" key={option.key}>
            <input
              aria-label={option.label}
              checked={environmentMode === option.key}
              name="scene-environment"
              onChange={() => onSelectEnvironment(option.key)}
              type="radio"
            />
            <span>
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </span>
          </label>
        ))}
      </div>

      <label className="toggle-row">
        <span>Auto-select best treatment for view mode</span>
        <input
          aria-label="Auto-select best treatment for view mode"
          checked={autoFollowModeScene}
          onChange={onToggleAutoFollow}
          type="checkbox"
        />
      </label>

      <p className="section-helper">
        One fixed Earth, sun, and starfield. These choices tune readability only.
      </p>
      <p className="section-helper">{recommendation}</p>
    </div>
  )
}
