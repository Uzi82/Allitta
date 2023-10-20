import axios from "axios";

export async function reset({ email, password, isShoper }: { email: string, password: string, isShoper: boolean }) {
    return axios.post(`http://localhost/api/users/${isShoper?'merchant':'customer'}/restore`,{
        email: `user@${email.split('@')[0]}.com`, password
    })
}