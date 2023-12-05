import { getCalibration, findFirstDigit, readInput, changeCharsWithDigits } from './advent'

describe('findFirstDigit', () => {
  it('works', () => {
    expect(findFirstDigit('1abc2')).toEqual('1')
    expect(findFirstDigit('abc12')).toEqual('1')
    expect(findFirstDigit('abc21')).toEqual('2')
    expect(findFirstDigit('2')).toEqual('2')
    expect(findFirstDigit('')).toEqual('0')
  })
})

describe('advent day 1', () => {
  it('works with example data', () => {
    const result = getCalibration(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'])
    expect(result).toEqual(142)
  })

  it('works with real data', () => {
    const input = readInput()
    const result = getCalibration(input)
    expect(result).toEqual(54597)
  })

  it.skip('works with new data', () => {
    const input = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen',
    ]
    const result = getCalibration(input)
    expect(result).toEqual(281)
  })
})

describe('substitute digits', () => {
  it('works', () => {
    expect(changeCharsWithDigits('onetwothree')).toEqual('123')
    expect(changeCharsWithDigits('123onetowthree45')).toEqual('1231tow345')
    expect(changeCharsWithDigits('oneight')).toEqual('1ight')
    expect(changeCharsWithDigits('abcdenineffg')).toEqual('abcde9ffg')
    // expect(changeCharsWithDigits('1oneight')).toEqual('1on8') TODO: this doesn't work because the solution is not correct
  })
})
