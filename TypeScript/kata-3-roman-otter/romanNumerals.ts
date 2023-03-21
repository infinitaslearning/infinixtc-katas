export const romanNumerals = (arabicNumber: number) => {
  const digits = [
    { arabic: 1, roman: 'I' },
    { arabic: 5, roman: 'V' },
    { arabic: 10, roman: 'X' },
  ]

  for (let i = 0; i < digits.length; i++) {
    const { arabic, roman } = digits[i]
    if (arabicNumber === arabic - 1) return `I${roman}`
  }

  let value = ''
  if (arabicNumber >= 5) {
    value = 'V'
  }
  value = value + 'I'.repeat(arabicNumber % 5)
  return value
}
