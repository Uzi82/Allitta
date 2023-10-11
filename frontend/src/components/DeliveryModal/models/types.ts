export type Props = {
    id: string
}

export type info = {
    name: string,
    address: string,
    telephone: string,
    message: string,
    products: {
        img: FileList | null,
        id: string,
        name: string,
        quantity: number,
        totalPrice: number
    }[],
    status: string,
    currency: string
}

export interface statusesTS {
    [key: string]: string,
}