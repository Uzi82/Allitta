import { lowStockProd } from '../'
export async function getLowStock(): Promise<lowStockProd[]> {
    return [
        {
            id: '1',
            title: 'Product name',
            remaining: 10
        },
        {
            id: '2',
            title: 'Product name',
            remaining: 10
        },
        {
            id: '3',
            title: 'Product name',
            remaining: 10
        },
        {
            id: '4',
            title: 'Product name',
            remaining: 10
        },
        {
            id: '5',
            title: 'Product name',
            remaining: 10
        },
        {
            id: '6',
            title: 'Product name',
            remaining: 10
        },
        {
            id: '7',
            title: 'Product name',
            remaining: 10
        }
    ]
}