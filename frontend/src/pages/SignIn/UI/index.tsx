import { Logo } from "../../../UI/Logo"
import { Form } from "../../../components/Form"
import { Authorization, BackgroundImage, LeftContent, RightContent, Text, Wrapper } from "./styled"

export const SignInPage: React.FC = () => {
    return (
        <Wrapper>
            <LeftContent>
                <Logo>ALLITTA</Logo>
                {/* <Authorization /> it will be a module later */}
                <Form type="verifying" />
            </LeftContent>
            <RightContent>
                <Text>“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</Text>
                <BackgroundImage />
            </RightContent>
        </Wrapper>
    )
}