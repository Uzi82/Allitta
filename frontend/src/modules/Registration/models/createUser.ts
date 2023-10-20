import axios from "axios";
import { type IUser } from "../";

export async function createUser({ user, isShoper }: { user: IUser, isShoper: boolean }) {
    let type = isShoper ? 'merchant' : 'customer' 
    const data = await axios.post(`http://localhost/api/users/${type}/register`, {
        ...user, phone_number: user.phone_number.replace(/[^\d]/g, '')
    })
    return data
}