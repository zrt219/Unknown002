import { Line } from '@react-three/drei'
import { colors } from '../../../data/spacecraftConfig'

export default function CableLine({ color = colors.cable, points }) {
  return <Line color={color} lineWidth={1} points={points} />
}
