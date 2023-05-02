type TimeConversion = (time: string) => string

export const toBerlinTime: TimeConversion = (time: string): string => {
  const minutes = Number(time.substring(3, 5))
  return singleMinutesRow(minutes).padStart(24, 'O')
}

function singleMinutesRow(minutes: number): string {
  const singleMinutes = minutes % 5
  return 'Y'.repeat(singleMinutes).padEnd(4, 'O')
}
