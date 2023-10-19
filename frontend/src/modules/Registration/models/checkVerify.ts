import axios, { AxiosResponse } from "axios";

export async function checkVerify({ email, isShoper, code }: { email: string, isShoper: boolean, code: number }) {
    const data =  await axios.get('http://localhost/api/users/email/verify/check', {
        params: {
            email: email,
            user_type: isShoper ? 2 : 3,
            code: code,
            event_type: 1
        }
    }).then((res)=>res.data)
    return data
}