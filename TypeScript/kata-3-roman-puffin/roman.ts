export const toRoman = (num: number): string => {
  if (num === 1000) return 'M'
  if (num === 500) return 'D'
  if (num === 100) return 'C'
  if (num === 50) return 'L'
  if (num === 10) return 'X'
  if (num === 5) return 'V'
  return 'I'
}
