import schengenTime from './travelling-johnny'

describe('Travelling Johnny', () => {
  it('returns 90 when no trips booked', () => {
    expect(schengenTime([])).toBe(90)
  })
})
