import axios from "axios";

export async function logout() {
    await axios.get('http://localhost/api/users/merchant/logout').catch(()=>{return})
}