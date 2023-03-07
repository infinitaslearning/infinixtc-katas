import { fizzBuzz } from './fizz-buzz'

describe('Ping Pong', () => {
    it('returns 100 elements', () => {
        expect(fizzBuzz().length).toEqual(100)
    })

    it('returns strings', () => {
        expect.assertions(100);

        fizzBuzz().forEach(element => {
            expect(element).toBeInstanceOf(String);
        });

    });
})
