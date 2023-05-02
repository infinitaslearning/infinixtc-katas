import { toBerlinTime } from './clock'

function singleMinutesRow(time: string): string {
  return time.substring(20, 24)
}

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

    expect(singleMinutesRow(berlinTime)).toBe(expected)
  })
})
