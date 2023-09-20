export function cutDescription(description: string) {
    if(description.length > 75) return description.slice(0, 74)+'...'
    else return description
}