import { Html } from '@react-three/drei'
import { subsystems } from '../../data/spacecraftConfig'

function getLabelBody(detail, subsystem, emphasized) {
  switch (detail) {
    case 'clean':
      return subsystem.label
    case 'review':
      return emphasized ? subsystem.note : subsystem.label
    case 'capture':
      return emphasized ? subsystem.note : subsystem.label
    case 'energy':
      return emphasized ? subsystem.relatedEnergyFlow : subsystem.label
    case 'thermal':
      return emphasized ? subsystem.realismNote : subsystem.note
    case 'engineering':
    default:
      return emphasized ? subsystem.note : subsystem.label
  }
}

export default function Labels({ presentation, selectedSubsystem }) {
  if (!presentation.visibleSubsystemIds.length) {
    return null
  }

  return (
    <group>
      {presentation.visibleSubsystemIds.map((id) => {
        const subsystem = subsystems[id]

        if (!subsystem) {
          return null
        }

        const emphasized = subsystem.id === selectedSubsystem
        const labelBody = getLabelBody(presentation.detail, subsystem, emphasized)

        return (
          <Html
            distanceFactor={12}
            key={subsystem.id}
            position={subsystem.labelAnchor}
            transform
          >
            <div
              className={[
                'scene-label',
                emphasized ? 'active' : '',
                presentation.labelClass ?? '',
                presentation.detail === 'capture' ? 'capture' : '',
                presentation.detail === 'review' ? 'review' : ''
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <strong>{subsystem.label}</strong>
              <span>{labelBody}</span>
            </div>
          </Html>
        )
      })}
    </group>
  )
}
