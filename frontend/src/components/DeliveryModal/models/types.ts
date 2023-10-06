export type Props = {
    id: string
}

export type info = {
    name: string,
    address: string,
    telephone: string,
    message: string,
    products: {
        img: FileList,
        name: string,
        quantity: number,
        totalPrice: number,
        currency: string
    }[],
    status: string,
    bill?: number
}