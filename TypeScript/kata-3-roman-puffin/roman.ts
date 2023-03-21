export const toRoman = (num: number): string => {
  let value = num
  let suffix = ''
  if (String(num).slice(-1) === '5') {
    value = value - 5
    suffix = 'V'
  }
  if (value === 1000) return `M${suffix}`
  if (value === 500) return `D${suffix}`
  if (value === 100) return `C${suffix}`
  if (value === 50) return `L${suffix}`
  if (value === 10) return `X${suffix}`
  if (num === 5) return 'V'
  return 'I'
}
