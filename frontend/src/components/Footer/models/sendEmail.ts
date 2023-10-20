import axios from "axios";

export async function sendEmail(email: string) {
    axios.post(`http://localhost/api/users/email/distribution/subscribe`, { email })
}