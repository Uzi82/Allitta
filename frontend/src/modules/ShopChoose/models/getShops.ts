import axios, { AxiosResponse } from "axios";
import { type shop } from "../";

export const getShops = async (jwt: string | undefined) => {
    if (jwt === undefined) return
    return await axios.get('http://localhost/api/users/merchant/shops', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then((res: AxiosResponse<shop[]>)=>res)
}