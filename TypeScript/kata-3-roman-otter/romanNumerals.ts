export const romanNumerals = (arabicNumber: number) => {
  let value = ''
  if (arabicNumber >= 5) {
    value = 'V'
  }
  value = value + 'I'.repeat(arabicNumber % 5)
  return value
}
