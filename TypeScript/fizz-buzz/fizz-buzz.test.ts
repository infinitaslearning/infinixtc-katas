import { fizzBuzz } from './fizz-buzz'

describe('Fizz Buzz', () => {
  it('returns 100 elements', () => {
    expect(fizzBuzz().length).toEqual(100)
  })

  it('return 1 as the first element', () => {
    expect(fizzBuzz()[0]).toEqual(1)
  })
})
