const first = (input: string) => input.split('').reverse().join('')

const second = (input: string) =>
  input
    .split('')
    .reduce((acc, currentCharacter) => {
      return [currentCharacter, ...acc]
    }, [] as string[])
    .join('')

const third = (input: string) => {
  const inputLength = input.length
  const result = []

  for (let index = inputLength - 1; index >= 0; index--) {
    const currentChar = input.charAt(index)
    result.push(currentChar)
  }

  return result.join('')
}

const fourth = (input: string) =>
  input.split('').reduce((acc, currentCharacter) => {
    return currentCharacter + acc
  }, '')

const fifth = (input: string) => {
  const inputLength = input.length
  let result = ''

  for (let index = inputLength - 1; index >= 0; index--) {
    const currentChar = input.charAt(index)
    result += currentChar
  }

  return result
}

const sixth = (input: string): string => {
  if (input.length <= 1) return input
  return sixth(input.substring(1)) + input[0]
}

const seventh = (input: string): string => {
  let reverseString: string = ''

  for (const char of input) {
    reverseString = char + reverseString
  }

  return reverseString
}

const eighth = (input: string) => {
  const [...rest] = input
  return rest.reverse().join('')
}

export const implementations: ((input: string) => string)[] = [first, second, third, fourth, fifth, sixth, seventh, eighth]
