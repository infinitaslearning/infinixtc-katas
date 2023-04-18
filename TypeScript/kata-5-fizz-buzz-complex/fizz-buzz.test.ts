import { fizzBuzz } from './fizz-buzz'

const checkNthElement = (n: number, value: string) => {
  expect(fizzBuzz()[n - 1]).toEqual(value)
}

describe('Fizz Buzz', () => {
  it('returns 100 elements', () => {
    expect(fizzBuzz().length).toEqual(100)
  })

  it('return 1 as the first element', () => {
    checkNthElement(1, '1')
  })

  it.each([3, 6, 9, 42, 96])('return "Fizz" if number is divisible by 3 (%i)', (n) => {
    checkNthElement(n, 'Fizz')
  })

  it.each([5, 10, 20, 40, 95])('return "Buzz" if number is divisible by 5 (%i)', (n) => {
    checkNthElement(n, 'Buzz')
  })

  it.each([15, 45])('return "FizzBuzz" if number is divisible by 3 and 5 (%i)', (n) => {
    checkNthElement(n, 'FizzBuzz')
  })

  it.each([5, 25, 50, 52, 55, 95])('returns "Buzz" if number contains 5 (%i)', (n) => {
    checkNthElement(n, 'Buzz')
  })

  it.each([3, 13, 31, 33, 93])('returns "Fizz" if number contains 3 (%i)', (n) => {
    checkNthElement(n, 'Fizz')
  })
})
