export function lowerCase(str: string) {
    return str.replace(/[A-Z]/g, (u) => u.toLowerCase())
}