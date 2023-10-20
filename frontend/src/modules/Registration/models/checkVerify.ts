import axios from "axios";

export async function checkVerify({ email, isShoper, code }: { email: string, isShoper: boolean, code: number }) {
    const data =  await axios.get('http://localhost/api/users/email/verify/check', {
        params: {
            email,
            user_type: isShoper ? 3 : 2,
            code,
            event_type: 1
        }
    }).then((res)=>res.data)
    return data
}