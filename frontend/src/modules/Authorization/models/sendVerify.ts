import axios from "axios";

export async function sendVerify({ email, isShoper }: { email: string, isShoper: boolean }) {
    return axios.post('http://localhost/api/users/email/verify', {
        email,
        user_type: isShoper ? 3 : 2,
        event_type: 2
    })
}