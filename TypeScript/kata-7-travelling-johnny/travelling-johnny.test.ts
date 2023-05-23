import schengenTime, { Trip } from './travelling-johnny'

const trip = (startDate: string, endDate: string): Trip => [new Date(startDate), new Date(endDate)]

describe('Travelling Johnny', () => {
  it('returns 90 when no trips booked', () => {
    expect(schengenTime([], new Date())).toBe(90)
  })

  it('returns 89 when a day trip is booked', () => {
    expect(schengenTime([trip('2023-05-01', '2023-05-01')], new Date('2023-05-10'))).toBe(89)
  })

  it('returns 90 when a day trip is booked but outside of the 180 window', () => {
    expect(schengenTime([trip('2022-05-01', '2022-05-01')], new Date('2023-05-10'))).toBe(90)
  })

  it('returns 80 if Johnny had 2 5 day trips in the last 180 days', () => {
    const trip1 = trip('2023-04-06', '2023-04-10')
    const trip2 = trip('2023-05-01', '2023-05-05')

    const checkDate = new Date('2023-05-10')

    const daysRemaining = schengenTime([trip1, trip2], checkDate)

    expect(daysRemaining).toBe(80)
  })
})
