import { Link, Outlet } from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { AccountContext } from "../../../modules/Registration";

export const RegistrationLayout: React.FC = () => {
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [isShoper, setIsShoper] = useState<boolean | undefined>()

    return (
        <BackgroundBlur circles close logo >
            <Outlet context={{ email, setEmail, password, setPassword, isShoper, setIsShoper } satisfies AccountContext}></Outlet>
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
            <div style={{ position: 'absolute', right: 0, }}>
                <Link to={'/signup/verify'}>verify</Link>
                <br />
                <Link to={'/signup'}>account</Link>
                <br />
                <Link to={'/signup/customer'}>profile</Link>
                <br />
                <Link to={'/signup/customer/photo'}>photo profile</Link>
            </div>
        </BackgroundBlur>
    )
}