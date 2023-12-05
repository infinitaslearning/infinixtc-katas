import { parseLine } from './advent'
import { sumLines } from './advent'

import fs from 'node:fs'

describe('advent', () => {
  describe('using example', () => {
    it.each([
      { line: '1abc2', number: 12 },
      { line: 'pqr3stu8vwx', number: 38 },
      { line: 'a1b2c3d4e5f', number: 15 },
      { line: 'treb7uchet', number: 77 },
      { line: '', number: 0 },
    ])('parses $number from $line', ({ number, line }) => {
      expect(parseLine(line)).toEqual(number)
    })

    it('parses all lines and sums it up', () => {
      const lines = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']
      expect(sumLines(lines)).toEqual(142)
    })

    it('solved the problem', () => {
      const lines = fs.readFileSync('./advent-2023-robin/inputs.txt').toString().split("\n")
      console.log(sumLines(lines))
    })
  })
})
