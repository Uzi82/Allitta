import axios from "axios";
import { type AppDispatch, type categoryType, setCategories } from "../";

export async function getCategories(dispatch: AppDispatch): Promise<categoryType[]> {
    const data: categoryType[] = await axios.get(`http://api.localhost/api/products/categories`).then(res=>res.data) // Получаю категории
    let list: {id: string, name: string, path: string}[] = [] // Создаю массив для прокида в store
    data.map((el, index)=>{
        index < 6 && list.push({id: el.id, name: el.name, path: el.id.toString()}) // Прокидываю в store 6 категорий для футера
    })
    dispatch(setCategories(list)) // Диспачу
    return data // Возвращаю все категории для слайдера
}