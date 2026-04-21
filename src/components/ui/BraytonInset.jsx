import { braytonOverlay } from '../../data/spacecraftConfig'

export default function BraytonInset() {
  return (
    <article className="mode-note-card">
      <h3>Closed Brayton Cycle Overview</h3>
      <p>
        Reactor heat drives a closed working-fluid loop through compression,
        heat addition, turbine extraction, generation, and waste-heat rejection.
      </p>
      <ul className="mode-note-list">
        <li>{braytonOverlay.stageLabels.compressor}</li>
        <li>{braytonOverlay.stageLabels.heatInput}</li>
        <li>{braytonOverlay.stageLabels.turbine}</li>
        <li>{braytonOverlay.stageLabels.alternator}</li>
        <li>{braytonOverlay.stageLabels.electricOutput}</li>
        <li>{braytonOverlay.stageLabels.heatRejection}</li>
      </ul>
    </article>
  )
}
