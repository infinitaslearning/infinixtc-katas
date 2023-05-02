type TimeConversion = (time: string) => string

export const toBerlinTime: TimeConversion = (time: string): string => {
  const [hours, minutes, seconds] = time.split(':').map(Number)
  return [
    secondsLamp(seconds),
    fiveHoursRow(hours),
    singleHoursRow(hours),
    fiveMinutesRow(minutes),
    singleMinutesRow(minutes),
  ]
    .join('')
}

function singleMinutesRow(minutes: number): string {
  const singleMinutes = minutes % 5
  return 'Y'.repeat(singleMinutes).padEnd(4, 'O')
}

function fiveMinutesRow(minutes: number): string {
  const fullRow = 'YYRYYRYYRYY'
  const fiveMinutes = Math.floor(minutes / 5)
  return fullRow.substring(0, fiveMinutes).padEnd(11, 'O')
}

function singleHoursRow(hours: number): string {
  const singleHours = hours % 5
  return 'R'.repeat(singleHours).padEnd(4, 'O')
}

function fiveHoursRow(hours: number): string {
  const fullRow = 'RRRR'
  const fiveHours = Math.floor(hours / 5)
  return fullRow.substring(0, fiveHours).padEnd(4, 'O')
}

function secondsLamp(seconds: number): string {
  return seconds % 2 === 0 ? 'Y' : 'O'
}
