type TimeConversion = (time: string) => string

export const toBerlinTime: TimeConversion = (time: string): string => {
  const hours = Number(time.substring(0, 2))
  const minutes = Number(time.substring(3, 5))
  return [singleHoursRow(hours), fiveMinutesRow(minutes), singleMinutesRow(minutes)].join('').padStart(24, 'O')
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
