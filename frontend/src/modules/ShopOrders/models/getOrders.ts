import { order } from "../";

export async function getOrders(filter: string | null): Promise<order[]> {
    const data = [
        {
            id: '231212135612',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135613',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'On Process'
        },
        {
            id: '231212135614',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'On Delivery'
        },
        {
            id: '231212135615',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'Done'
        },
        {
            id: '231212135616',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'Lose'
        },
        {
            id: '231212135617',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135618',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135619',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135620',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135621',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135622',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135623',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135624',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135625',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135626',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135627',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        },
        {
            id: '231212135628',
            name: 'Ahinsa De Silva',
            date: '12/12/23',
            amount: 1000000,
            currency: 'Rs.',
            status: 'New'
        }
    ]
    if(filter==='All') return data
    if(filter) return data.filter(el=> el.status === filter)
    return data
}