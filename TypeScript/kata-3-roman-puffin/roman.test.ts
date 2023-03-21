import { toRoman } from './roman'
import https from 'https';

const getRoman = (num: number) => new Promise(resolve => {
  https.get(`https://romans.justyy.workers.dev/api/romans/?n=${num}`, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('close', () => {
      const response = JSON.parse(data);
      resolve(response.result);
    });
  })
})

describe('roman tests', () => {
  it('returns I for 1', () => {
    expect(toRoman(1)).toBe('I')
  })

  it.each([1, 5, 10, 50, 100, 500, 1000])('transforms the basic number %i', (input) => {
    const options = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M',
    }
    expect(toRoman(input)).toBe(options[input as keyof typeof options])
  })

  it.each([15, 55, 105, 505, 1005])('transforms the basic number %i', (input) => {
    const options = {
      15: 'XV',
      55: 'LV',
      105: 'CV',
      505: 'DV',
      1005: 'MV',
    }
    expect(toRoman(input)).toBe(options[input as keyof typeof options])
  })

  it.each([4, 9, 40, 90, 900])('transforms the basic number %i', (input) => {
    const options = {
      4: 'IV',
      9: 'IX',
      40: 'XL',
      90: 'XC',
      900: 'CM',
    }
    expect(toRoman(input)).toBe(options[input as keyof typeof options])
  })

  it('converts 1999 to MCMXCIX', () => {
    expect(toRoman(1999)).toBe('MCMXCIX')
  })

  it('converts random numbers', async () => {
    const val = Math.floor(Math.random() * 5000);
    expect(toRoman(val)).toBe(await getRoman(val));
  })
})
