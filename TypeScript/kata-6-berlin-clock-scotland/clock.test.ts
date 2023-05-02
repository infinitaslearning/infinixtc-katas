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
})
