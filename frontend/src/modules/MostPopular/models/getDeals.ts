import { axios, type product } from '../'

export async function getMostPopular(): Promise<product[]> {
    return await axios.get('http://localhost:3001/deals').then(res=>res.data)
}