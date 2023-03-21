const literals = [
  { arab: 1000, roman: 'M' },
  { arab: 900, roman: 'CM' },
  { arab: 500, roman: 'D' },
  { arab: 400, roman: 'CD' },
  { arab: 100, roman: 'C' },
  { arab: 90, roman: 'XC' },
  { arab: 50, roman: 'L' },
  { arab: 40, roman: 'XL' },
  { arab: 10, roman: 'X' },
  { arab: 9, roman: 'IX' },
  { arab: 5, roman: 'V' },
  { arab: 4, roman: 'IV' },
  { arab: 1, roman: 'I' },
];

const toRomanInternal = (num: number, prefix: string = ''): string => {
  if (num < 1) return prefix;

  const literal = literals.find(literal => literal.arab <= num)!;
  const remainder = num - literal.arab;
  return toRomanInternal(remainder, prefix + literal.roman);
}

export const toRoman = (num: number) => toRomanInternal(num);
