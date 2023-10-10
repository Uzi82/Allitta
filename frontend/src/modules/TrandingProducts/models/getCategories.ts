import axios from "axios";
import {category} from "../";

export async function getCategories(): Promise<category[]> {
    return await axios.get('http://localhost/api/products/categories/recommendations/best?limit=2').then(res => res.data)
}
