const fs = require('fs')

export const readInput = (): string[] => {
  const input = fs.readFileSync(`${__dirname}/input.data.txt`, 'utf8')
  return input.split('\n')
}

export const getCalibration = (strings: string[]): number => {
  return strings.reduce((acc, curr) => {
    return acc + getCalibrationString(curr)
  }, 0)
}

export const getCalibrationString = (str: string): number => {
  let digits = ''
  digits += findFirstDigit(str)
  digits += findFirstDigit(str.split('').reverse().join())
  return parseInt(digits)
}

const digits = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}
export const changeCharsWithDigits = (str: string): string => {
  Object.entries(digits).forEach(([key, value]) => {
    // @ts-expect-error
    str = str.replaceAll(key, value)
  })
  return str
}

export const findFirstDigit = (str: string): string => {
  for (let i = 0; i < str.length; ++i) {
    const char = str[i]

    const num = parseInt(char, 10)
    if (!isNaN(num)) {
      return char
    }
  }

  return '0' // never reached
}
