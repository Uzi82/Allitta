import axios from "axios";
import {ShopInfo} from "./types";

const URL = 'http://localhost/api/shops';

export async function getShopInfo(id: string): Promise<ShopInfo> {
    return await axios.get(`${URL}/${id}?product_limit=4`).then(res=>res.data)
}
