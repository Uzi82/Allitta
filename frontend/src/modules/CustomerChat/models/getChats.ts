import { type chatListEl } from "../../CustomerChat";

export async function getChats(search: string): Promise<chatListEl[]> {
    let result: chatListEl[] = []
    for (let i = 0; i < 20; i++) result.push({
        id: (i + 1).toString(),
        img: undefined,
        name: 'Customer Name',
        lastMsg: 'Last message'
    })
    result = result.filter(el => el.name.startsWith(search))
    return result
}