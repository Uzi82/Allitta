import axios, { AxiosResponse } from "axios";

function getJWT() {
    let cookies = document.cookie.split('; ')
    for(let el of cookies) {
        let [key, value] = el.split('=')
        if(key === 'token') return value
    }
}

export async function getCategories(): Promise<AxiosResponse<{ id: number, name: string }[]>> {
    let token = getJWT()
    return await axios.get('http://localhost/api/shops/categories', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}