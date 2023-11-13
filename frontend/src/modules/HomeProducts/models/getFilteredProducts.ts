import { product } from "./types";

export async function getFilteredProducts({ pageCount }: { pageCount: number }): Promise<product[]> {
    // return await axios.get('http://localhost/api/products').then(res => res.data)
    return [
        {
            id: (pageCount + 21).toString(), // just because pageCount should not be unused
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },
        {
            id: '2',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },
        {
            id: '3',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },
        {
            id: '4',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },

    ]
}
