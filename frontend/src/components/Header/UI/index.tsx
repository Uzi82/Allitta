import { Link, useNavigate } from 'react-router-dom'
import { Logo, useJWT, useUserType } from '../'
import { HeaderDiv, HeaderContent, Navigation, LinkText, Sign, Button } from './styled'

export const Header: React.FC = () => {
    const jwt = useJWT()
    const type = useUserType()
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
                {
                    jwt === undefined
                        ?
                        <Sign>
                            <Button to={'/signup'}>Sign Up</Button>
                            <Button to={'/signin'}>Sign In</Button>
                        </Sign>
                        : 
                        <Button $big to={type !== undefined ? type === '2' ? 'user' : 'shop' : '/'}>
                            Profile
                        </Button>
                }
            </HeaderContent>
        </HeaderDiv>
    )
}