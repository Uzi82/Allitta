export type Shop = {
    id: string;
    name: string;
    logotype_path: string;
    banner_path: string;
    description: string;
    rating: string;
}

export type Product = {
    cost: number;
    currency: string;
    description: string;
    id: string;
    logotype_path: string;
    name: string;
}

export type CategoryData = {
    category_id: number;
    category_name: string;
    products: Product[];
}

export type ShopInfo = {
    data: CategoryData[];
    shop: Shop[];
}