import { type shop } from "../";

export const getShops = async (): Promise<shop[]> => {
    let result: shop[] = []
    for(let i=0; i<1; i++) result.push({
        id: i.toString(),
        name: 'Shop name'
    })
    return result
}