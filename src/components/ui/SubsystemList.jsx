export default function SubsystemList({
  activeSubsystem,
  subsystemOrder,
  subsystems,
  onSelectSubsystem
}) {
  return (
    <div className="subsystem-list" role="list">
      {subsystemOrder.map((key) => {
        const subsystem = subsystems[key]
        const isActive = activeSubsystem === key

        return (
          <button
            aria-pressed={isActive}
            className={isActive ? 'subsystem-chip active' : 'subsystem-chip'}
            key={key}
            onClick={() => onSelectSubsystem(key)}
            type="button"
          >
            {subsystem.label}
          </button>
        )
      })}
    </div>
  )
}
