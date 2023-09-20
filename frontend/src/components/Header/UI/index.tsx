import { Link } from 'react-router-dom'
import { Logo } from '../'
import { HeaderDiv, HeaderContent, Navigation, LinkText, Sign, Button } from './styled'

export const Header: React.FC = () => {
    return (
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
                    <Button width={'91px'} height={'35px'}>Sign Up</Button>
                    <Button width={'91px'} height={'35px'}>Sign In</Button>
                    <Button to='/'>Sign Up</Button>
                    <Button to='/'>Sign In</Button>
                </Sign>
            </HeaderContent>
        </HeaderDiv>
    )
}