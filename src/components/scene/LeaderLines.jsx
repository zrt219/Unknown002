import { Line } from '@react-three/drei'
import { subsystems } from '../../data/spacecraftConfig'

export default function LeaderLines({ presentation, selectedSubsystem }) {
  if (!presentation.showLeaderLines) {
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

        return (
          <Line
            color={subsystem.categoryColor ?? '#7dd3fc'}
            key={subsystem.id}
            lineWidth={emphasized ? 1.3 : 0.85}
            opacity={emphasized ? 0.9 : 0.42}
            points={[
              subsystem.leaderTarget,
              [
                (subsystem.leaderTarget[0] + subsystem.labelAnchor[0]) / 2,
                subsystem.labelAnchor[1] - 0.7,
                (subsystem.leaderTarget[2] + subsystem.labelAnchor[2]) / 2
              ],
              subsystem.labelAnchor
            ]}
            transparent
          />
        )
      })}
    </group>
  )
}
