export type CustomerInfo = {
    address: string,
    telephone: string,
    currency: string,
    orders: {
        id: string,
        date: string,
        price: number,
        currency: string,
        status: string
    }[]
}

export interface statusesTS {
    [key: string]: string,
}