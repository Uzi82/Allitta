import axios from "axios";
import { category } from "../";
export async function getCategories() {
    const data: category[] = [
        {
            id: '1',
            title: 'Product category'
        },
        {
            id: '2',
            title: 'Product category'
        }
    ]

    // const data: category[] = await axios.get('').then(res=>res.data)
    return data
}