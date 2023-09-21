export function checkProducts(amount: number) {
    if(amount >= 1000) return '999+'
    return `${amount}`
}