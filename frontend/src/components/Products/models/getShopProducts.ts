import { type Product } from "..";
export async function getShopProducts(): Promise<Product[]> {
    let result: Product[] = []
    for(let i=0; i<20; i++) result.push({
        number: 231212135612361587345+i,
        name: 'Ahinsashfshgdfghajsdfjhasjfd De Silva',
        category: 'Men’s Cloth',
        quantity: '20/11',
        currency: 'RS.',
        coast: '100,000.00',
        status: 'On Process'
    })
    return result
}