import { Outlet } from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { ToastContainer } from "react-toastify"

export const RegistrationLayout: React.FC = () => {
    return (
        <BackgroundBlur circles close logo >
            <Outlet></Outlet>
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
        </BackgroundBlur>
    )
}