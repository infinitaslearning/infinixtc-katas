export const fizzBuzz = (): string[] => {
  return new Array(100).fill('').map((_, index) => {
    const candidate = index + 1
    if (candidate % 15 === 0) return 'FizzBuzz'
    if (candidate % 3 === 0) return 'Fizz'
    if (candidate % 5 === 0) return 'Buzz'
    return String(candidate)
  })
}
