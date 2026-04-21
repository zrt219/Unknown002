export default function PresentationModes({
  activeMode,
  modes,
  onSelectMode
}) {
  return (
    <div className="inspection-mode-group" role="radiogroup" aria-label="Presentation Modes">
      {modes.map((mode) => (
        <button
          aria-pressed={activeMode === mode.key}
          className={
            activeMode === mode.key
              ? 'inspection-mode-button active'
              : 'inspection-mode-button'
          }
          key={mode.key}
          onClick={() => onSelectMode(mode.key)}
          type="button"
        >
          <strong>{mode.label}</strong>
          <span>{mode.description}</span>
        </button>
      ))}
    </div>
  )
}
