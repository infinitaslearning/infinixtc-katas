type TimeConversion = (time: string) => string

export const toBerlinTime: TimeConversion = (time: string): string => {
  const minutes = Number(time.substring(3, 5))
  return `${fiveMinutesRow(minutes)}${singleMinutesRow(minutes)}`.padStart(24, 'O')
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
