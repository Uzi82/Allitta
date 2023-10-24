export const useUserType = () => {
    let cookies = document.cookie.split('; ')
    for(let el of cookies) {
        let [key, value] = el.split('=')
        if(key === 'type' && value !== '') return value 
    }
}