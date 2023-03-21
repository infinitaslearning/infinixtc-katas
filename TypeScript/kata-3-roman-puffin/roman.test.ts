import { toRoman } from "./roman";

describe('roman tests', () => {
  it('returns I for 1', () => {
    expect(toRoman(1)).toBe('I')
  });

  it.each([1, 5, 10, 50, 100, 500, 1000])('transforms the basic number %i', input => {
    const options = {
      1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'
    };

    expect(toRoman(input)).toBe(options[input as keyof typeof options])
  })
});
