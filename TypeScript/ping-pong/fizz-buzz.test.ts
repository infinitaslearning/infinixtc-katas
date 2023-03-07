import { fizzBuzz } from './fizz-buzz'

describe('Ping Pong', () => {
    it('returns 100 elements', () => {
        expect(fizzBuzz().length).toEqual(100)
    })
})
