import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../UI/Button'
import Logo from '../UI/Logo'

const HeaderDiv = styled.div`
    border: 1px solid #D9D9D9;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(20px);
    width: 100vw;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderContent = styled.div`
    width: 1108px;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 57px;
`

const LinkText = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    transition-duration: 300ms;
    &:hover {
        color: #5D20D6;
        font-size: 15px;
    }
`

const Sign = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
    align-items: center;
`

const Header: React.FC = () => {
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

export default Header