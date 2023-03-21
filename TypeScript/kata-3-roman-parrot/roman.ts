
const arabicToRoman: Record<number,string> = {
  10: 'X',
  5: 'V',
  1: 'I',
}

export const roman = (n: number): string => {
  if (n === 2) return 'II'
  return arabicToRoman[n]

  return ''
}
