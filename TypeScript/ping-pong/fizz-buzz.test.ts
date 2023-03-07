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
})
