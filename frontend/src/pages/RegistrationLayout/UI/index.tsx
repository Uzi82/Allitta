import { Link, Outlet } from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { AccountContext } from "../../../modules/Registration";
import { SignUpPopup } from "../../../components/Popups";

export const RegistrationLayout: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isShoper, setIsShoper] = useState<boolean>(false)
    const [isVerifyPassed, setIsVerifyPassed] = useState<0 | 1 | 2>(0) // 0 = not yet, 1 = passed with success, 2 = passed with fail

    return (
        <BackgroundBlur $isShown circles close logo >
            {isVerifyPassed ?
                <SignUpPopup {...{ isVerifyPassed, setIsVerifyPassed }} />
                :
                <Outlet context={{ email, setEmail, password, setPassword, isShoper, setIsShoper, isVerifyPassed, setIsVerifyPassed } satisfies AccountContext} />
            }
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
        </BackgroundBlur>
    )
}