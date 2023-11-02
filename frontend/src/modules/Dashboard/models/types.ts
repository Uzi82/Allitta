export type answer = {
    summary: {
        [key: string]: number,
        total_products: number, 
        total_sales: number, 
        pending_orders: number, 
        on_process_delivery: number
    }
}

export interface infoElementsTS {
    [key: string]: string[],
}