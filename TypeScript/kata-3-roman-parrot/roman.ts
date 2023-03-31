
const arabicToRomanSymbols = [
  ['X', 'V', 'I'],
  ['C', 'L', 'X'],
  ['M', 'D', 'C'],
]

export const roman = (n: number): string => {

  let output = ''
  splitDigits(n).forEach((v,i) => {output = convertRomanDigit(v, arabicToRomanSymbols[i]) + output})
  if (n >= 1000) output = "M".repeat(Math.floor(n/1000)) + output
  return output
}

const splitDigits = (n: number): number[] => {
  return Array.from(String(n), x => (Number(x))).reverse().slice(0,3)
}

export const convertRomanDigit = (n: number, symbols:string[]): string => {
  let output = ''
  if (n === 9) output = symbols[0]
  else if (n >= 4) output = symbols[1]

  if (n % 5 <= 3) output = output + symbols[2].repeat(n % 5)
  if (n % 5 === 4) output = symbols[2] + output

  return output
}