import axios from "axios";
import { type categoryType } from "../";

export async function getCategories(): Promise<categoryType[]> {
    return await axios.get(`http://api.localhost/api/products/categories`).then(res=>res.data)
}