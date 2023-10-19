import axios from "axios";

export async function checkVerify({ email, isShoper, code }: { email: string, isShoper: boolean, code: number }) {
    return await axios.get('http://localhost/api/users/email/verify/check', {
        params: {
            email: `user@${email.split('@')[0]}.com`,
            user_type: isShoper?3:2,
            code,
            event_type: 2
        }
    })
}