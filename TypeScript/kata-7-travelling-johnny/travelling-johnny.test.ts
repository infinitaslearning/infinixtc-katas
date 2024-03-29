import schengenTime, { Trip } from './travelling-johnny'

const trip = (startDate: string, endDate: string): Trip => [new Date(startDate), new Date(endDate)]

describe('Travelling Johnny', () => {
  it('returns 90 when no trips booked', () => {
    expect(schengenTime([], new Date())).toBe(90)
  })

  it.each`
  trips                                 | checkDate
  ${[trip('2023-05-01', '2023-05-01')]} | ${new Date('2023-05-10')}
  `('returns 89 when a day trip is booked', ({trips, checkDate}) => {
    expect(schengenTime(trips, checkDate)).toBe(89)
  })

  it.each`
  trips                                 | checkDate
  ${[trip('2022-05-01', '2022-05-01')]} | ${new Date('2023-05-10')}
  ${[trip('2022-11-11', '2022-11-11')]} | ${new Date('2023-05-10')}
  `('returns 90 when a day trip is booked but outside of the 180 window', ({trips, checkDate}) => {
    expect(schengenTime(trips, checkDate)).toBe(90)
  })

  it('returns 80 if Johnny had 2 recent 5 day trips in the last 180 days', () => {
    const trip1 = trip('2023-04-06', '2023-04-10')
    const trip2 = trip('2023-05-01', '2023-05-05')

    const checkDate = new Date('2023-05-10')

    const daysRemaining = schengenTime([trip1, trip2], checkDate)

    expect(daysRemaining).toBe(80)
  })

  it('returns 81 if Johnny had 2 recent 5 day trips where the second trip starts the same day where the first trip ends', () => {
    const trip1 = trip('2023-04-06', '2023-04-10')
    const trip2 = trip('2023-04-10', '2023-04-14')

    const checkDate = new Date('2023-05-10')

    const daysRemaining = schengenTime([trip1, trip2], checkDate)

    expect(daysRemaining).toBe(81)
  })

  it('returns -5 if Johnny recently spent 95 days in Schengen', () => {
    const trip1 = trip('2023-01-01', '2023-04-05')

    const checkDate = new Date('2023-05-10')

    const daysRemaining = schengenTime([trip1], checkDate)

    expect(daysRemaining).toBe(-5)
  })

  it('returns 90 after a period of 90 days outside the schengen zone', () => {
    const trip1 = trip('2022-12-01', '2022-12-31')

    const checkDate = new Date('2023-04-01')

    const daysRemaining = schengenTime([trip1], checkDate)

    expect(daysRemaining).toBe(90)
  })
})
