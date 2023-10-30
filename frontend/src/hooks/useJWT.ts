export const useJWT = () => {
    let cookies = document.cookie.split('; ')
    for(let el of cookies) {
        let [key, value] = el.split('=')
        if(key === 'token' && value !== '') return value 
    }
}