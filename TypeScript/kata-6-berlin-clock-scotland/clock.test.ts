import { toBerlinTime } from './clock'

describe('Berlin Clock', () => {
  it.each`
    digitalTime   | expected
    ${'00:00:00'} | ${'OOOO'}
    ${'23:59:59'} | ${'YYYY'}
    ${'12:32:00'} | ${'YYOO'}
    ${'12:34:00'} | ${'YYYY'}
    ${'12:35:00'} | ${'OOOO'}
  `('renders $expected for single minutes row at $digitalTime', ({ digitalTime, expected }) => {
    const berlinTime = toBerlinTime(digitalTime)
    const singleMinutesRow = berlinTime.substring(20, 24)

    expect(singleMinutesRow).toBe(expected)
  })

  it.each`
    digitalTime   | expected
    ${'00:00:00'} | ${'OOOOOOOOOOO'}
    ${'23:59:59'} | ${'YYRYYRYYRYY'}
    ${'12:04:00'} | ${'OOOOOOOOOOO'}
    ${'12:23:00'} | ${'YYRYOOOOOOO'}
    ${'12:35:00'} | ${'YYRYYRYOOOO'}
  `('renders $expected for five minutes row at $digitalTime', ({ digitalTime, expected }) => {
    const berlinTime = toBerlinTime(digitalTime)
    const fiveMinutesRow = berlinTime.substring(9, 20)

    expect(fiveMinutesRow).toBe(expected)
  })

  it.each`
    digitalTime   | expected
    ${'00:00:00'} | ${'OOOO'}
    ${'23:59:59'} | ${'RRRO'}
    ${'02:04:00'} | ${'RROO'}
    ${'08:23:00'} | ${'RRRO'}
    ${'14:35:00'} | ${'RRRR'}
  `('renders $expected for single hours row at $digitalTime', ({ digitalTime, expected }) => {
    const berlinTime = toBerlinTime(digitalTime)
    const singleHoursRow = berlinTime.substring(5, 9)

    expect(singleHoursRow).toBe(expected)
  })

  it.each`
    digitalTime   | expected
    ${'00:00:00'} | ${'OOOO'}
    ${'23:59:59'} | ${'RRRR'}
    ${'02:04:00'} | ${'OOOO'}
    ${'08:23:00'} | ${'ROOO'}
  `('renders $expected for five hours row at $digitalTime', ({ digitalTime, expected }) => {
    const berlinTime = toBerlinTime(digitalTime)
    const fiveHoursRow = berlinTime.substring(1, 5)

    expect(fiveHoursRow).toBe(expected)
  })

  it.each`
    digitalTime   | expected
    ${'00:00:00'} | ${'Y'}
    ${'23:59:59'} | ${'O'}
  `('renders $expected for seconds lamp at $digitalTime', ({ digitalTime, expected }) => {
    const berlinTime = toBerlinTime(digitalTime)
    const secondsLamp = berlinTime[0]

    expect(secondsLamp).toBe(expected)
  })

  it.each`
    digitalTime   | expected
    ${'00:00:00'} | ${'YOOOOOOOOOOOOOOOOOOOOOOO'}
    ${'23:59:59'} | ${'ORRRRRRROYYRYYRYYRYYYYYY'}
    ${'16:50:06'} | ${'YRRROROOOYYRYYRYYRYOOOOO'}
    ${'11:37:01'} | ${'ORROOROOOYYRYYRYOOOOYYOO'}
  `('renders Berlin time as $expected at $digitalTime', ({ digitalTime, expected }) => {
    const berlinTime = toBerlinTime(digitalTime)

    expect(berlinTime).toBe(expected)
  })

})
