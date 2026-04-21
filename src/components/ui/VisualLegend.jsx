export default function VisualLegend({ items, title }) {
  return (
    <div className="legend-block">
      {title ? <h3>{title}</h3> : null}
      <div className="legend-list">
        {items.map((item) => (
          <div className="legend-row" key={item.key}>
            <span
              aria-hidden="true"
              className="legend-swatch"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <strong>{item.label}</strong>
              <span>{item.meaning}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
