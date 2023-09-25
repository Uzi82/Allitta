import { Outlet } from "react-router-dom"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { Logo } from "../../../UI/Logo"
import { BackgroundImage, LeftContent, RightContent, Text, Wrapper } from "./styled"
import { Popup } from "../../../components/Popup"

export const AuthorizationLayout: React.FC = () => {
    return (
        <Wrapper>
            <LeftContent>
                <Logo>ALLITTA</Logo>
                <Outlet></Outlet>
            </LeftContent>
            <RightContent>
                <Text>“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</Text>
                <BackgroundImage src="/backgroundSignin.png" alt="" />
                {/* нам нужна адекватная картинка, которая может быть фоном. эта имеет другой логотип (название) + нельзя полностью вытащить из фигмы и как итог сделать адекватный BackgroundImage*/}
            </RightContent>
            {/* <BackgroundBlur>
                <Popup success type="email" />
            </BackgroundBlur> */}
        </Wrapper>

    )
}