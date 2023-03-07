export const fizzBuzz = (): string[] => {
  return new Array(100).fill('').map((_, index) => {
    const candidate = index + 1
    if (candidate % 3 === 0) return 'Fizz'
    return String(candidate)
  })
}
