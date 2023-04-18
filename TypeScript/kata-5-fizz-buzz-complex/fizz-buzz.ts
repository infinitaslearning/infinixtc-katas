const isDivisibleOrContains = (check: number, n: number): boolean => {
  return n % check === 0 || String(n).includes(String(check))
}

const isFizz = (n: number): boolean => {
  return isDivisibleOrContains(3, n)
}

const isBuzz = (n: number): boolean => {
  return isDivisibleOrContains(5, n)
}

export const fizzBuzz = (): string[] => {
  const array: string[] = []
  for (let i = 1; i <= 100; i++) {
    let output: string = ''
    if (isFizz(i)) {
      output += 'Fizz'
    }
    if (isBuzz(i)) {
      output += 'Buzz'
    }

    if (output !== '') {
      array.push(output)
    } else {
      array.push(String(i))
    }
  }
  return array
}

export const _convertNumber = (dictionary: [number, string], n: number): string => {
  const [value, translation] = dictionary
  if (n === value) {
    return translation
  }
  return String(n)
}
