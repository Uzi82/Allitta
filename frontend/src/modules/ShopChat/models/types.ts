export type chatListEl = {
    id: string,
    img: FileList | undefined,
    name: string,
    lastMsg: string
}

export type msg = {
    id: string,
    index: number,
    content: string,
    authorIsYou: boolean
}