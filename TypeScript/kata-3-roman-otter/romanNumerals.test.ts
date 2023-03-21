import { romanNumerals } from './romanNumerals'

describe('Roman Numerals', () => {
  it('converts 1 to I', () => {
    expect(romanNumerals(1)).toEqual('I')
  })
  it('converts 2 to II', () => {
    expect(romanNumerals(2)).toEqual('II')
  })
})
