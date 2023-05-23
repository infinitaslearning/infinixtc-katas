import schengenTime, { Trip } from './travelling-johnny'

describe('Travelling Johnny', () => {
  it('returns 90 when no trips booked', () => {
    expect(schengenTime([], new Date())).toBe(90)
  })

  it('returns 89 when a day trip is booked', () => {
    expect(schengenTime([[new Date('2023-05-01'), new Date('2023-05-01')]], new Date('2023-05-10'))).toBe(89)
  })

  it('returns 90 when a day trip is booked but outside of the 180 window', () => {
    expect(schengenTime([[new Date('2022-05-01'), new Date('2022-05-01')]], new Date('2023-05-10'))).toBe(90)
  })

  it('returns 80 if Johnny had 2 5 day trips in the last 180 days', () => {
    const trip1 = [new Date('2023-04-06'), new Date('2023-04-10')] as Trip
    const trip2 = [new Date('2023-05-01'), new Date('2023-05-05')] as Trip

    const checkDate = new Date('2023-05-10')

    const daysRemaining = schengenTime([trip1, trip2], checkDate)

    expect(daysRemaining).toBe(80)
  })
})
