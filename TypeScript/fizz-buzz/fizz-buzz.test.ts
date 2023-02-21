import { fizzBuzz, isFizz } from './fizz-buzz'

describe('Fizz Buzz', () => {
  it('returns 100 elements', () => {
    expect(fizzBuzz().length).toEqual(100)
  })

  it('return 1 as the first element', () => {
    expect(fizzBuzz()[0]).toEqual("1")
  })

  it('return "Fizz" if number is divisible by 3', () => {
    expect(isFizz(3)).toEqual(true)
  })
})
