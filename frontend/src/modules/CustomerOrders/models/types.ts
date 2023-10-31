export type order = {
    id: string,
    name: string,
    date: string,
    amount: number,
    currency: string,
    status: string
}

export interface statusesTS {
    [key: string]: string,
}