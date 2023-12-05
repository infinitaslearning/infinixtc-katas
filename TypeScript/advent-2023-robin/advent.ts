export function parseLine(line: string): number {
  if(line === '') return 0

  const first = firstDigit(line)
  const second = firstDigit(reverseString(line))
  return Number(first + second)
}

function firstDigit(line: string): string {
  const value = line.match(/\d/)?.[0]
  if (value === undefined) {
    throw new Error(`No digit in '${line}'`)
  }
  return String(value)
}

function reverseString(line: string): string {
  return line.split('').reverse().join('')
}


export function sumLines(lines: string[]): number {
    return lines.map(parseLine).reduce((acc, item) => acc + item, 0)
}
