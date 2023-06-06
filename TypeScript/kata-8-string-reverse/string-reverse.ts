const first = (input: string) => input.split('').reverse().join('')
const second = (input: string) => input.split('').reduce((acc, currentCharacter) => {
  return [currentCharacter, ...acc]
}, [] as string[]).join('')

export const implementations: ((input: string) => string)[] = [first, second]
