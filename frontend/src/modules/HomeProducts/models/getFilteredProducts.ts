import axios from "axios";
import { product } from "./types";

export async function getFilteredProducts(): Promise<product[]> {
    // return await axios.get('http://localhost/api/products').then(res => res.data)
    return [
        {
            id: '1',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },
        {
            id: '2',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },
        {
            id: '3',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },
        {
            id: '4',
            name: 'string',
            cost: 'string',
            description: 'string',
            currency: 'string',
            logotype_path: 'string'
        },

    ]
}
