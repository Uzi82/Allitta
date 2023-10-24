import axios, { AxiosResponse } from "axios";

export async function getUser(jwt: string) {
    return await axios.get('http://localhost/api/users/merchant/profile/me', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then((res: AxiosResponse<{
        name: string,
        img_path: string
    }>)=>res)
}