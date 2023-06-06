import { implementations } from './string-reverse'

describe('String reversing', () => {
  it.each(implementations)('reverses string', (implementation) => {
    const original = '1234abcdEFG!@#'
    const reversed = '#@!GFEdcba4321'

    const result = implementation(original)

    expect(result).toBe(reversed)
  })

  it.each(implementations)('reverses empty string', (implementation) => {
    const result = implementation('')

    expect(result).toBe('')
  })
})
