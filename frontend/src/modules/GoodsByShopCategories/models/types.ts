import { Product } from "../../../pages/ShopPage"

export type deal = null | {
    id: string,
    name: string,
    cost: string,
    description: string,
    currency: string,
    logotype_path: string
}

export type Props = {
    title: string,
    isLoading: boolean,
    data: Product[];
}