export type Props = {
    new_orders?: {
        id: number,
        customer_name: string,
        ordered_date: string,
        amount: number,
        currency: string,
        status: number
    }[]
}