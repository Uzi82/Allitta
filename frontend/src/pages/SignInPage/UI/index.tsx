import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { Logo } from "../../../UI/Logo"
import { Form } from "../../../components/Form"
import { SuccessPopup } from "../../../components/Popup"
import { Authorization, BackgroundImage, LeftContent, RightContent, Text, Wrapper } from "./styled"

export const SignInPage: React.FC = () => {
    return (
        <Wrapper>
            <LeftContent>
                <Logo>ALLITTA</Logo>
                {/* <Authorization /> it will be a module later */}
                <Form type="forget" />
            </LeftContent>
            <RightContent>
                <Text>“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</Text>
                <BackgroundImage src="/backgroundSignin.png" alt="" />
                {/* нам нужна адекватная картинка, которая может быть фоном. эта имеет другой логотип (название) + нельзя полностью вытащить из фигмы и как итог сделать адекватный BackgroundImage*/}
            </RightContent>
            {/* <BackgroundBlur>
                <SuccessPopup success type="email" />
            </BackgroundBlur> */}
        </Wrapper>

    )
}