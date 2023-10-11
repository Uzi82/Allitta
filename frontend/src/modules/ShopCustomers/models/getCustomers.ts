import { customer } from "../"

export const getCustomers = async (name?: string): Promise<customer[]> => {
    let result: customer[] = []
    for(let i = 1; i < 50; i++) result.push({
        id: i.toString(),
        name: 'Ahinsa De Silva',
        email: 'Ahinsa@gmail.com',
        orders: 30,
        deliveries: 30,
        income: 100000,
        currency: 'Rs.'
    })
    if (name !== undefined) result = result.filter(el => el.name.startsWith(name))
    return result
}