export function createLinearOffsets(count, spacing) {
  const center = (count - 1) / 2
  return Array.from({ length: count }, (_, index) => (index - center) * spacing)
}
