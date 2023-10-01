import axios from "axios";
import { ShopInfo } from "./types";

const URL = 'http://api.localhost/api/shops';

export async function getShopInfo(id: string): Promise<ShopInfo> {
    return await axios.get(`${URL}/${id}`).then(res=>res.data)
}