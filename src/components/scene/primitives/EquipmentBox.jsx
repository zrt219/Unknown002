import { colors } from '../../../data/spacecraftConfig'

export default function EquipmentBox({
  color = colors.bus,
  isSelected = false,
  onClick,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  userData
}) {
  return (
    <mesh
      castShadow
      onClick={onClick}
      position={position}
      receiveShadow
      scale={scale}
      userData={userData}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={isSelected ? '#ffe082' : color}
        metalness={0.18}
        roughness={0.74}
      />
    </mesh>
  )
}
