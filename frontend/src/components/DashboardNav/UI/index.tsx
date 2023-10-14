import { useNavigate } from "react-router-dom"
import { Logo, Props, lowerCase, navElements, useAppSelector } from "../"
import { Container, Navigation, Element, Img, Profile, ProfileHead, LogoutBtn, LogoutImg, LogoutText, LogoLink } from "./styled"
import { User } from "./User"

export const DashboardNav: React.FC<Props> = ({ active }) => {
    const navigate = useNavigate()
    if(active===undefined) active = ''
    const opened = useAppSelector(state=>state.shopMenuBurger.opened)
    return(
        <Container $active={opened}>
            <LogoLink to={'/shop'}>
                <Logo color="#5D20D6">ALLITTA</Logo>
            </LogoLink>
            <Navigation>
                {
                    navElements.map(el=>{
                        return(
                            <Element key={el.title} $active={lowerCase(active) === lowerCase(el.title)} onClick={() => navigate(`/shop/${el.title.replace(/[A-Z]/g, (u) => u.toLowerCase())}`)}>
                                <Img src={lowerCase(active) === lowerCase(el.title) ? el.active : el.img} />
                                { el.title }
                            </Element>
                        )
                    })
                }
            </Navigation>
            <Profile>
                <ProfileHead>
                    Profile
                </ProfileHead>
                <User name="Admin" status="Admin" />
                <LogoutBtn>
                    <LogoutImg />
                    <LogoutText>
                        Logout
                    </LogoutText>
                </LogoutBtn>
            </Profile>
        </Container>
    )
}