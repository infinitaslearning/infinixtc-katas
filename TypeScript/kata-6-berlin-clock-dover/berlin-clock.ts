export const toSingleMinutesRow = (digitaltime: string): string => {
  const minutes = digitaltime.substring(3, 5)
  const numberOfSingleMinuteLights = parseInt(minutes) % 5
  const singleMinutesRow = 'Y'.repeat(numberOfSingleMinuteLights)
  return singleMinutesRow.padEnd(4, 'O')
}

export const toFiveMinutesRow = (digitaltime: string): string => {
  const minutes = digitaltime.substring(3, 5)
  const numberOf5MinuteLights = Math.floor(parseInt(minutes)/5)
  const fiveMinuteRow = ('Y'.repeat(numberOf5MinuteLights)).replace(/YYY/g, 'YYR')
  return fiveMinuteRow.padEnd(11, 'O')
};
