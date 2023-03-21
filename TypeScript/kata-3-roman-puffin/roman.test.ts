import { toRoman } from "./roman";

describe('roman tests', () => {
  it('returns I for 1', () => {
    expect(toRoman(1)).toBe('I')
  });
});
