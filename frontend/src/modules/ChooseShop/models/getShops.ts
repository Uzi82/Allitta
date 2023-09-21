import { axios, type shop } from '..'

export async function getShops(): Promise<shop[]> {
    return await axios.get('http://api.localhost/api/shops/recommendations/best?limit=8').then(res=>res.data)
}