import { roman } from './roman'

describe('roman converter', () => {
  it('converts 1 to I', () => {
    expect(roman(1)).toEqual('I')
  })

  it('converts 5 to V', () => {
    expect(roman(5)).toEqual('V')
  })

  it('converts 2 to II', () => {
    expect(roman(2)).toEqual('II')
  })
})
