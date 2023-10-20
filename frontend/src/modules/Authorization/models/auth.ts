import axios, { AxiosResponse } from "axios";

export async function auth({ email, password, isShoper }: { email: string, password: string, isShoper: boolean }) {
    return axios.post(`http://localhost/api/users/${isShoper?'merchant':'customer'}/login`, {
        email: `user@${email.split('@')[0]}.com`,
        password
    }).then(
        (res: AxiosResponse<{
            jwt_token: string,
            token_type: string,
            expires_in: number
        }>)=>{
            document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
            document.cookie = `type=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
            document.cookie = `token=${res.data.jwt_token}; path=/; max-age=${res.data.expires_in};`
            document.cookie = `type=${isShoper?`3`:`2`}; path=/; expires=${res.data.expires_in};`
            return
        }
    )
}