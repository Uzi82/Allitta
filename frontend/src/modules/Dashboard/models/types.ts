export type answer = {
    summary: {
        [key: string]: number,
        total_products: number, 
        total_sales: number, 
        pending_orders: number, 
        on_process_delivery: number
    }
    stock_summary: {
        id: number,
        product_name: string,
        available_stock_percent: number
    }[],
    available_stock_percent: number,
    new_orders: {
        id: number,
        customer_name: string,
        ordered_date: string,
        amount: number,
        currency: string,
        status: number
    }[]
}

export interface infoElementsTS {
    [key: string]: string[],
}