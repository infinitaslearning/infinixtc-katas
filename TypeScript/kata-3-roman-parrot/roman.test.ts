import { roman} from './roman'

describe('roman converter', () => {
  it('the roman converter should work for units', () => {
    expect(roman(1)).toEqual('I')
    expect(roman(2)).toEqual('II')
    expect(roman(3)).toEqual('III')
    expect(roman(4)).toEqual('IV')
    expect(roman(5)).toEqual('V')
    expect(roman(6)).toEqual('VI')
    expect(roman(7)).toEqual('VII')
    expect(roman(8)).toEqual('VIII')
    expect(roman(9)).toEqual('IX')
    expect(roman(0)).toEqual('')
  })

  it('the roman converter should use the correct symbols for tens', () => {
    expect(roman(80)).toEqual('LXXX')
    expect(roman(90)).toEqual('XC')
  })

  it('the roman converter should use the correct symbols for hundreds', () => {
    expect(roman(800)).toEqual('DCCC')
    expect(roman(900)).toEqual('CM')
  })

  it('the roman converter should work correct for the thousands', () => {
    expect(roman(3000)).toEqual('MMM')
    expect(roman(13000)).toEqual('MMMMMMMMMMMMM')
  })

  it('the roman converter should assemble correctly the result', () => {
    const units = Math.floor(Math.random() * 10)
    const tens = Math.floor(Math.random() * 10)
    const hundreds = Math.floor(Math.random() * 10)
    const thousands = Math.floor(Math.random() * 20)
    expect(roman(thousands*1000)+roman(hundreds*100)+roman(tens*10)+roman(units)).toEqual(roman(thousands * 1000 + hundreds * 100 + tens * 10 + units))
  })


})
