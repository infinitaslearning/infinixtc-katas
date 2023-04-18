const isFizz = (n: number): boolean => {
  return n % 3 === 0
}

const isBuzz = (n: number): boolean => {
  return n % 5 === 0 || String(n).includes('5')
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
    }
    else {
      array.push(String(i))
    }
  }
  return array
}
