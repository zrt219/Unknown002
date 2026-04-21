export default function CameraPresets({
  activePreset,
  presetGroups,
  presets,
  onSelectPreset
}) {
  return (
    <div className="camera-groups">
      {presetGroups.map((group) => (
        <section className="control-group" key={group.label}>
          <h3>{group.label}</h3>
          <div className="camera-buttons">
            {group.items.map((key) => (
              <button
                aria-pressed={activePreset === key}
                className={activePreset === key ? 'camera-button active' : 'camera-button'}
                key={key}
                onClick={() => onSelectPreset(key)}
                type="button"
              >
                {presets[key].label}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
