import { type UserProps } from "../";
import { UserContainer, UserData, UserImg, UserName, UserStatus } from "./styled";


export const User: React.FC<UserProps> = ({ name, img, status }) => {
    return(
        <UserContainer>
            <UserImg $img={img} />
            <UserData>
                <UserName>
                    {name}
                </UserName>
                <UserStatus>
                    {status}
                </UserStatus>
            </UserData>
        </UserContainer>
    )
}