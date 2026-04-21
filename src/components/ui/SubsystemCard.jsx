import { cameraPresets } from '../../data/spacecraftConfig'

export default function SubsystemCard({
  cardData,
  onFocusPreset,
  sceneMode,
  subsystem
}) {
  if (!subsystem || !cardData) {
    return (
      <div className="inspection-card">
        <h3>Overview</h3>
        <p>
          Select a subsystem from the scene or the inspection list to review
          engineering notes and placement rationale.
        </p>
      </div>
    )
  }

  return (
    <article className="inspection-card">
      <div className="inspection-card-header">
        <h3>{cardData.title}</h3>
        <span
          aria-hidden="true"
          className="inspection-color-chip"
          style={{ backgroundColor: subsystem.categoryColor }}
        />
      </div>

      <p className="inspection-summary">{cardData.summary}</p>

      <dl className="inspection-details">
        {cardData.sections.map((section) => (
          <div key={section.label}>
            <dt>{section.label}</dt>
            <dd>{section.value}</dd>
          </div>
        ))}
      </dl>

      <button
        className="focus-button"
        onClick={() => onFocusPreset(subsystem.cameraPreset)}
        type="button"
      >
        Focus {cameraPresets[subsystem.cameraPreset]?.label ?? subsystem.label}
      </button>

      <p className="section-helper">
        {sceneMode === 'energy'
          ? 'Card content is focused on source, conversion, distribution, and propulsion use.'
          : sceneMode === 'thermal'
            ? 'Card content is focused on heat origin, rejection, and protected-zone meaning.'
            : 'Card content is focused on architecture, placement, and realism.'}
      </p>
    </article>
  )
}
