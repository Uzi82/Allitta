import { axios, type deal } from '../'

export async function getDeals(): Promise<deal[]> {
    return await axios.get('http://localhost:3001/deals').then(res=>res.data)
}