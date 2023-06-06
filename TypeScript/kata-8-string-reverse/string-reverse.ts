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

const ninth = (input: string) => {
  const banana: any = {}

  input.split('').forEach((character, index) => {
    banana[index] = character
  })

  const properties = Object.entries(banana)

  const sortedArray = properties.sort(([a], [b]) => {
    return Number(b) - Number(a)
  })

  return sortedArray
    .map(([, character]) => {
      return character
    })
    .join('')
}

const tenth = (input: string): string => {
  const length = input.length
  const [...characters] = input
  const midpoint = Math.floor(length / 2)

  for (let i = 0; i <= midpoint; i++) {
    const swap = characters[i]
    characters[i] = characters[length - i]
    characters[length - i] = swap
  }

  return characters.join('')
}

export const implementations: ((input: string) => string)[] = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
]

const eleventh = (input: string, index: number = 0): string => {
  const last = implementations.length % 2 ? implementations.length - 2 : implementations.length - 3
  if (index === last) return input
  return eleventh(implementations[index](input), index + 1)
}

implementations.push(eleventh)
