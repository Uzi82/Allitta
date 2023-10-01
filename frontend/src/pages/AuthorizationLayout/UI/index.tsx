import { Outlet } from "react-router-dom"
import { LeftContent, Logo, RightContent, Text, Wrapper } from "./styled"
import { ToastContainer } from "react-toastify"

export const AuthorizationLayout: React.FC = () => {
    return (
        <Wrapper>
            <LeftContent>
                <Logo>ALLITTA</Logo>
                <Outlet></Outlet>
            </LeftContent>
            <RightContent>
                <Text>“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</Text>
                {/* <BackgroundImage src="/backgroundSignin.png" alt="background" /> нам нужна адекватная картинка, которая может быть фоном. эта имеет другой логотип (название) + нельзя полностью вытащить из фигмы и как итог сделать адекватный BackgroundImage*/}
            </RightContent>
            {/* на ошибку или НЕ ошибку от сервера
             <BackgroundBlur>
                <Popup success type="email" />
            </BackgroundBlur> 
            */}
            <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
        </Wrapper>
    )
}