import { axios, type product } from '..'

export async function getMostPopular(): Promise<product[]> {
    return await axios.get('http://api.localhost/api/products/recommendations/best?limit=4').then(res=>res.data)
}