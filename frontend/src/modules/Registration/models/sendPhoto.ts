import axios from "axios";

function getJwt(cookie: string) {
    let cookies = cookie.split('; ')
    for(let el of cookies) {
        let [key, value] = el.split('=')
        if(key === 'token') return value
    }
}

export async function sendPhoto({ file, isShoper }: { file: FileList, isShoper: boolean }) {
    return await axios.post(`http://localhost/api/users/${isShoper?'merchant':'customer'}/profile/photo`, {
        photo: file[0]
    },
    {
        headers: {
            Authorization: `bearer ${getJwt(document.cookie)}`,
            'Content-Type': 'multipart/form-data'
        },
        
    })
}