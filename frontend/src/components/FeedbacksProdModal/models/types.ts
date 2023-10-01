export type Props = {
    id: string,
    name: string
}

export type feedBacks = {
    overall: number,
    list: feedBack[]
}

export type feedBack = {
    name: string,
    text: string,
    stars: number
}