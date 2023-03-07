import { fizzBuzz } from './fizz-buzz'

describe('Ping Pong', () => {
  it('returns 100 elements', () => {
    expect(fizzBuzz().length).toEqual(100)
  })

  it('returns strings', () => {
    fizzBuzz().forEach((element) => {
      expect(typeof element).toEqual('string')
    })

    expect.assertions(100)
  })

  it('returns strings with a length greater than 0', () => {
    fizzBuzz().forEach((element) => {
      expect(element.length).toBeGreaterThan(0)
    })
  })

  it('the 0th element should be 1', () => {
    expect(fizzBuzz()[0]).toEqual('1')
  })

  it('contains Fizz elements', () => {
    expect(fizzBuzz()).toContain('Fizz')
  })

  it('contains Fizz at every third element', () => {
    const result = fizzBuzz()

    for (let index = 2; index < result.length; index + 3) {
      expect(result[index]).toMatch(/Fizz/)
    }
  })
})
