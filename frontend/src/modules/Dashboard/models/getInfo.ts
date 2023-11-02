import axios, { AxiosResponse } from "axios"
import { answer } from "../"

export const getInfo = async (jwt: string | undefined, id: number) => {
    if(jwt === undefined) return
    return await axios.get(`http://localhost/api/users/merchant/shops/dashboard/${id}`, {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
        .then((res: AxiosResponse<answer>) => res.data)
}