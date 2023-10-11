import { Link, Outlet } from "react-router-dom"
import { LeftContent, Logo, RightContent, Text, Wrapper } from "./styled"
import { ToastContainer } from "react-toastify"
import React from "react"
import { SignInPopup } from "../../../components/Popups"
import { SignInContext } from "../../../modules/Authorization/models/types"
import { BackgroundBlur } from "../../../UI/BackgroundBlur"

export const AuthorizationLayout: React.FC = () => {
    const [email, setEmail] = React.useState<string | undefined>()
    const [password, setPassword] = React.useState<string | undefined>()
    const [isShoper, setIsShoper] = React.useState<boolean | undefined>()
    const [isSuccess, setIsSuccess] = React.useState<0 | 1 | 2>(1) // 0 = not yet, 1 = verification email failed,  2 = password succesfully changed

    return (
        <Wrapper>
            {isSuccess ?
                <BackgroundBlur $isShown>
                    <SignInPopup {...{ isSuccess, setIsSuccess }} />
                </BackgroundBlur>
                :
                <>
                    <LeftContent>
                        <Logo>ALLITTA</Logo>
                        <Outlet context={{ email, setEmail, password, setPassword, isShoper, setIsShoper, isSuccess, setIsSuccess } satisfies SignInContext} />
                    </LeftContent>
                    <RightContent>
                        <Text>“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</Text>
                    </RightContent>
                    <ToastContainer position="top-center" autoClose={2000} limit={2} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark" />
                </>
            }
            <div style={{ position: 'absolute', right: 0, color: 'black' }}>
                <Link style={{ color: 'black' }} to={'/signin'}>sign in</Link>
                <br />
                <Link style={{ color: 'black' }} to={'/signin/verify'}>verify</Link>
                <br />
                <Link style={{ color: 'black' }} to={'/signin/forget'}>forget</Link>
                <br />
                <Link style={{ color: 'black' }} to={'/signin/reset'}>reset</Link>
            </div>
        </Wrapper>
    )
}