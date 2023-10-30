import axios, {AxiosResponse} from "axios";
import {type ICreateShop} from "../";

function getJWT() {
    let cookies = document.cookie.split('; ')
    for(let el of cookies) {
        let [key, value] = el.split('=')
        if(key === 'token') return value
    }
}

export async function createShop(data: ICreateShop) {
    const token = getJWT()
    const resData = await axios.post('http://localhost/api/users/merchant/shops', {
        name: data.name,
        description: data.description,
        category_id: data.category_id,
        email: data.email,
        phone_number: data.phone_number.replace(/[^\d]/g, ''),
        street: data.street,
        city: data.city,
        zip_code: data.zip_code,
        reg_number: data.regnumber
    },{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then((res: AxiosResponse<{shop_id: number}>)=>res)
    if(data.logo !== undefined) {
        await axios.post('http://localhost/api/users/merchant/shops/logotype', {
            shop_id: resData.data.shop_id,
            photo: data.logo[0]
        },{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    if(data.banner !== undefined) {
        await axios.post('http://localhost/api/users/merchant/shops/banner', {
            shop_id: resData.data.shop_id,
            photo: data.banner[0]
        },{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
