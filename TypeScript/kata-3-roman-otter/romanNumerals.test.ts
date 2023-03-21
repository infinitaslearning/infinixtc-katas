import { romanNumerals } from './romanNumerals'

describe('Roman Numberals', () => {
  it('converts 1 to I', () => {
    expect(romanNumerals(1)).toEqual('I')
  })
})
