import { type msg } from "../../CustomerChat";

export async function getChat(id: string): Promise<msg[]> {
    let result: msg[] = []
    for (let i = 0; i < 20; i++) result.push({
        id: (i + 1).toString(),
        index: i,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        authorIsYou: i % 2 !== 0
    })
    return result
}