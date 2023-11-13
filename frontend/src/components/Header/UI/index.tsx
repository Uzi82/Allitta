import { Link, useNavigate } from 'react-router-dom'
import { CartModal, Logo, openModal, useAppDispatch, useAppSelector, useJWT, useUserType } from '../'
import { HeaderDiv, HeaderContent, Navigation, LinkText, Sign, Button, CartBtn } from './styled'

export const Header: React.FC = () => {
    const jwt = useJWT()
    const type = useUserType()
    const dispatch = useAppDispatch()
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
                        <Sign>
                            <Button $big to={type !== undefined ? type === '2' ? 'user' : 'shop' : '/'}>
                                Profile
                            </Button>
                            <CartBtn onClick={() => dispatch(openModal({
                                type: 'cartModal',
                                id: 'main'
                            }))} />
                        </Sign>
                }
            </HeaderContent>
        </HeaderDiv>
    )
}