import schengenTime from './travelling-johnny'

describe('Travelling Johnny', () => {
  it('returns 90 when no trips booked', () => {
    expect(schengenTime([], new Date())).toBe(90)
  })

  it('returns 89 when a day trip is booked', () => {
    expect(schengenTime([[new Date('2023-05-01'), new Date('2023-05-01')]], new Date('2023-05-10'))).toBe(89)
  })
})
