import { axios, type shop } from '..'

export async function getShops(): Promise<shop[]> {
    return await axios.get('http://localhost:3001/deals').then(res=>res.data)
}