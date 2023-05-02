export const toSingleMinutesRow = (digitaltime: string): string => {
  const minutes = digitaltime.substring(3, 5)
  const numberOfSingleMinuteLights = parseInt(minutes) % 5
  let singleMinutesRow = 'Y'.repeat(numberOfSingleMinuteLights)
  return singleMinutesRow.padEnd(4, 'O')
}

export const toFiveMinutesRow = (digitaltime: string): string => {
  return '';
};
