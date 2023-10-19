import axios from "axios";

export async function sendVerify({ email, isShoper }: { email: string, isShoper: boolean }) {
    return axios.post('http://localhost/api/users/email/verify', {
        email: `user@${email.split('@')[0]}.com`,
        user_type: isShoper ? 3 : 2,
        event_type: 2
    })
}