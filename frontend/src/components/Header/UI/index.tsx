import { Link } from 'react-router-dom'
import { Button, Logo } from '../'
import { HeaderDiv, HeaderContent, Navigation, LinkText, Sign } from './styled'

export const Header: React.FC = () => {
    return(
        <HeaderDiv>
            <HeaderContent>
                <Logo>ALLITTA</Logo>
                <Navigation>
                    <Link to={'/'}><LinkText>Home</LinkText></Link>
                    <Link to={'/'}><LinkText>Shop Online</LinkText></Link>
                    <Link to={'/'}><LinkText>What’s New</LinkText></Link>
                    <Link to={'/'}><LinkText>Contact</LinkText></Link>
                    <Link to={'/'}><LinkText>About us</LinkText></Link>
                </Navigation>
                <Sign>
                    <Button width={91} height={35}>Sign Up</Button>
                    <Button width={91} height={35}>Sign In</Button>
                </Sign>
            </HeaderContent>
        </HeaderDiv>
    )
}