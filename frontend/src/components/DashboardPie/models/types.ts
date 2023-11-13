export type Props = {
    percent: number,
    stock_summary: {
        id: number, 
        product_name: string, 
        available_stock_percent: number
    }[]
}