import { Outlet } from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationLayout: React.FC = () => {
    return (
        <BackgroundBlur $isShown circles close logo >
            <Outlet></Outlet>
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
        </BackgroundBlur>
    )
}