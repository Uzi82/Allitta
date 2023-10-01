export function makeStars(stars: number): boolean[] {
    let result: boolean[] = []
    for(let i=1; i <= 5; i++) {
        result.push(i >= stars ? true : false)
    }
    return result
}