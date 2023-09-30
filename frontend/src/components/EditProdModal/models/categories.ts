import { type category } from "../";

export const categories = (arr: category[] | undefined) => {
    if(arr === undefined) return [{value: '', label: ''}]
    return arr.map(el => {
        return {
            value: el.id,
            label: el.name.replace(/^[a-z]/, (l) => l.toUpperCase())
        }
    })
}