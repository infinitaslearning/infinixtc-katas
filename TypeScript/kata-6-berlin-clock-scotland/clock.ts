type TimeConversion = (time: string) => string

const singleUnitsRow =
  (onSymbol: string) =>
  (units: number): string => {
    const singleUnits = units % 5
    return onSymbol.repeat(singleUnits).padEnd(4, 'O')
  }

const singleMinutesRow = singleUnitsRow('Y')
const singleHoursRow = singleUnitsRow('R')

const fiveUnitsRow =
  (fullRow: string) =>
  (units: number): string => {
    const fiveUnits = Math.floor(units / 5)
    return fullRow.substring(0, fiveUnits).padEnd(fullRow.length, 'O')
  }

const fiveMinutesRow = fiveUnitsRow('YYRYYRYYRYY')
const fiveHoursRow = fiveUnitsRow('RRRR')

const secondsLamp = (seconds: number): string => (seconds % 2 === 0 ? 'Y' : 'O')

export const toBerlinTime: TimeConversion = (time: string): string => {
  const [hours, minutes, seconds] = time.split(':').map(Number)
  return [
    secondsLamp(seconds),
    fiveHoursRow(hours),
    singleHoursRow(hours),
    fiveMinutesRow(minutes),
    singleMinutesRow(minutes),
  ].join('')
}
