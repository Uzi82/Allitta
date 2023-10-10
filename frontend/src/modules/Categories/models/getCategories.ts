import axios from "axios";
import {type categoryType} from "../";

export async function getCategories(): Promise<categoryType[]> {
    return await axios.get(`http://localhost/api/products/categories?image=1`).then(res => res.data)
}
