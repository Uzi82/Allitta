import { type CustomerInfo } from "../";

export const getInfo = async (id: string): Promise<CustomerInfo> => {
    return {
        address: '42B/3, Buddhaloka mawatha, Suwarapola, Piliyandala',
        telephone: '076 1 234 567',
        currency: 'Rs.',
        orders: [
            {
                id: '231212135612',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135613',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135614',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135615',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135616',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135617',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135618',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135619',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135620',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135621',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135622',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            },
            {
                id: '231212135623',
                date: '12/12/23',
                price: 100000,
                currency: 'Rs.',
                status: 'New'
            }
        ]
    }
}