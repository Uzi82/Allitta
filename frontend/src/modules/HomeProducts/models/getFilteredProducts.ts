import axios from "axios";
import { product } from "../../MostPopular";

export async function getFilteredProducts(): Promise<product[]> {
    return await axios.get('http://localhost/api/products').then(res => res.data)
}
