import { romanNumerals } from './romanNumerals'

describe('Roman Numerals', () => {
  it('converts 1 to I', () => {
    expect(romanNumerals(1)).toEqual('I')
  })

  it('converts 2 to II', () => {
    expect(romanNumerals(2)).toEqual('II')
  })

  it('converts 3 to III', () => {
    expect(romanNumerals(3)).toEqual('III')
  })

  it('converts 5 to V', () => {
    expect(romanNumerals(5)).toEqual('V')
  })

  it('converts 7 to VII', () => {
    expect(romanNumerals(7)).toEqual('VII')
  })
})
