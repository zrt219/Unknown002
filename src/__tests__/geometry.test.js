import { describe, expect, it } from 'vitest'
import { createLinearOffsets } from '../utils/geometry'

describe('createLinearOffsets', () => {
  it('returns evenly spaced offsets centered on zero', () => {
    expect(createLinearOffsets(4, 3)).toEqual([-4.5, -1.5, 1.5, 4.5])
  })
})
