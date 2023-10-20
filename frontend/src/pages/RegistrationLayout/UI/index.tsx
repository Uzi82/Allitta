import { Outlet, 
         useNavigate 
} from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, 
         useState 
} from "react"
import { SimpleBlur,
         AccountContext,
         SignUpPopup
} from '../'

export const RegistrationLayout: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isShoper, setIsShoper] = useState<boolean>(false)
    const [isVerifyPassed, setIsVerifyPassed] = useState<0 | 1 | 2>(0) // 0 = not yet, 1 = passed with success, 2 = passed with fail
    const navigate = useNavigate()
    useEffect(()=>{
        let cookies = document.cookie.split('; ')
        for(let el of cookies) {
            let [key, value] = el.split('=')
            if(key === 'token' && (value !== '' || value !== undefined)) navigate(`/`)
            else (console.log(key, value))
        }
    }, [navigate])
    return (
        <BackgroundBlur $isShown circles close logo >
            <SimpleBlur bgoff active={isVerifyPassed !== 0}>
                <SignUpPopup {...{ isVerifyPassed, setIsVerifyPassed }} />
            </SimpleBlur>
            <Outlet context={{ email, setEmail, password, setPassword, isShoper, setIsShoper, isVerifyPassed, setIsVerifyPassed } satisfies AccountContext} />
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
        </BackgroundBlur>
    )
}