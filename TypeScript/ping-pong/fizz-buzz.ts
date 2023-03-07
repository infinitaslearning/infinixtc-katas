export const fizzBuzz = (): string[] => {
  return new Array(100).fill('1').map((_, i) => {
    if (i === 0) return '1'
    const val = Math.floor(Math.random() * 2);
    return val % 2 ? String(i): 'Fizz'
  })
}
