export function firstLetterCap(description: string) {
    return description.replace(/^[a-z]/, (letter)=>letter.toUpperCase())
}