export type Props = {
    id: string,
    name: string
}

export type feedBacks = {
    overall: number,
    list: feedBack[]
}

export type feedBack = {
    id: string,
    name: string,
    text: string,
    stars: number
}