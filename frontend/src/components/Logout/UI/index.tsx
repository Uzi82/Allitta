import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { Button } from "../../../UI/Button"
import { LogoutProps } from "../models/types"
import { Actions, ButtonTransparent, Subtitle, Title, Wrapper } from "./styled"

export const Logout: React.FC<LogoutProps> = ({ isLogoutShown, setIsLogoutShown }) => {
    return (
        <BackgroundBlur $isShown={isLogoutShown}>
            <Wrapper>
                <Title>Confirm Logout</Title>
                <Subtitle>Are you sure you want to logout ?</Subtitle>
                <Actions>
                    <Button br="10px">Logout</Button>
                    <ButtonTransparent onClick={() => setIsLogoutShown(p => !p)}>Cancel</ButtonTransparent>
                </Actions>
            </Wrapper>
        </BackgroundBlur>

    )
}