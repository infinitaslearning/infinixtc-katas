const first = (input: string) => input.split('').reverse().join('')
const second = (input: string) => input.split('').reduce((acc, currentCharacter) => {
  return [currentCharacter, ...acc]
}, [] as string[]).join('')
const third = (input: string) => {
    const inputLength = input.length
    const result = []

    for(let index = inputLength -1 ; index >= 0; index--){
        const currentChar = input.charAt(index)
        result.push(currentChar)
    }

    return result.join('')
}

export const implementations: ((input: string) => string)[] = [first, second, third]
