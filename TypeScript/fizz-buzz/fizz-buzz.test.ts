import { fizzBuzz } from './fizz-buzz'

describe('Fizz Buzz', () => {
  it('returns 100 elements', () => {
    expect(fizzBuzz().length).toEqual(100)
  })
})
