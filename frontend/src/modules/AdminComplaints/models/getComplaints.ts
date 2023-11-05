import { IComplaint } from "./types"

export const getComplaints = async (): Promise<IComplaint[]> => {
    let result: IComplaint[] = []
    for (let i = 1; i < 40; i++) result.push({
        id: (i + 23124145).toString(),
        subject: 'This shop is fake',
        sentDate: '12/12/23',
        kindOf: 'Shop',
    })
    return result
}