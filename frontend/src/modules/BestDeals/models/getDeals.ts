import { axios, type deal } from '../'

export async function getDeals(): Promise<deal[]> {
    return await axios.get('http://api.localhost/api/products/recommendations/personal?limit=4').then(res=>res.data)
}