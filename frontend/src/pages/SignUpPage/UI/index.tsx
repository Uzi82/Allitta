import { Outlet } from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"

export const SignUpPage: React.FC = () => {
    return (
        <BackgroundBlur circles close logo >
            <Outlet></Outlet>
        </BackgroundBlur>
    )
}