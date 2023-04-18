const isFizz = (n: number): boolean => {
  return n % 3 === 0
}

const isBuzz = (n: number): boolean => {
  return n % 5 === 0
}

export const fizzBuzz = (): string[] => {
  const array: string[] = []
  for (let i = 1; i <= 100; i++) {
    if (isFizz(i)) {
      array.push('Fizz')
    } else if (isBuzz(i)) {
      array.push('Buzz')
    } else {
      array.push(String(i))
    }
  }
  return array
}
