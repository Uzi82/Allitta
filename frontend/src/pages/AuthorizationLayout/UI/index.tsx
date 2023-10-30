import { Outlet, 
         useNavigate 
} from "react-router-dom"
import { IPad, LeftContent, 
         Logo, 
         RightContent, 
         Text, 
         Wrapper 
} from "./styled"
import { ToastContainer } from "react-toastify"
import { useEffect, 
         useState 
} from "react"
import { SimpleBlur,
         SignInContext,
         SignInPopup
} from "../"

export const AuthorizationLayout: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isShoper, setIsShoper] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<0 | 1 | 2>(0) // 0 = not yet, 1 = verification email failed,  2 = password succesfully changed
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
        <Wrapper>
            <SimpleBlur active={isSuccess !== 0} bgoff>
                <SignInPopup {...{ isSuccess, setIsSuccess }} />
            </SimpleBlur>
            <LeftContent>
                <Logo>ALLITTA</Logo>
                <Outlet context={{ email, setEmail, password, setPassword, isShoper, setIsShoper, isSuccess, setIsSuccess } satisfies SignInContext} />
            </LeftContent>
            <RightContent>
                <Text>“Fust delivery is not a dream, it`s the truth!”</Text>
            </RightContent>
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
            <IPad />
        </Wrapper>
    )
}