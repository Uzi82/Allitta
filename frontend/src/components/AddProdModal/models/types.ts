export type Add = {
    img: FileList,
    quantity: number,
    price: number,
    active?: boolean,
    draft?: boolean,
    publicName: string,
    description: string,
    category: string,
    subcategory: string
}

export type option = {
    value: string,
    label: string
}

export type category = {
    id: string,
    name: string
}

export type subcategory = {
    id: string,
    name: string
}