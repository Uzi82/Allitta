import { useLocation, useNavigate } from "react-router-dom"
import { Logo, navElements } from "../"
import { Container, Navigation, Element, Img, NavigationMobile, NavBurger, NavBurgerItem, Profile, ProfileWrapper, ProfileTitle, ProfileButton, ProfileName, ProfileRole, ProfileInfo, ProfileAvatar } from "./styled"
import { Burger } from "./Burger"
import React from "react"
export const CustomerDashboardNav: React.FC<{ setIsLogoutShown: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsLogoutShown }) => {
    const [burgerActive, setBurgerActive] = React.useState(false)
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')[2]

    return (
        <Container>
            <Logo color="#5D20D6">ALLITTA</Logo>
            <Navigation>
                {navElements.map(navItem => (
                    <Element key={navItem.title} $active={navItem.title.toLowerCase() === location} onClick={() => navigate(`/customer/${navItem.title.replace(/[A-Z]/g, (u: string) => u.toLowerCase())}`)}>
                        <Img src={navItem.img} />
                        <span>{navItem.title}</span>
                    </Element>
                ))}
            </Navigation>
            <ProfileWrapper>
                <ProfileTitle>profile</ProfileTitle>
                <Profile>
                    <ProfileAvatar /> {/*need to provide src={} */}
                    <ProfileInfo>
                        <ProfileName>Customer</ProfileName>
                        <ProfileRole>Ashomka</ProfileRole>
                    </ProfileInfo>
                </Profile>
                <ProfileButton onClick={(e) => {
                    e.preventDefault()
                    setIsLogoutShown(p => !p)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3334 14.1667L17.5 10L13.3334 5.83337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 10H7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Log out</span>
                </ProfileButton>
            </ProfileWrapper>
            <NavigationMobile>
                <Burger active={burgerActive} setActive={setBurgerActive} />
                <NavBurger $active={burgerActive}>
                    {navElements.map(navItem => (
                        <NavBurgerItem key={navItem.title} $active={navItem.title.toLowerCase() === location} onClick={() => {
                            navigate(`/admin/${navItem.title.replace(/[A-Z]/g, (u: string) => u.toLowerCase())}`)
                            setBurgerActive(false)
                        }}>
                            <Img src={navItem.img} />
                            <span>{navItem.title}</span>
                        </NavBurgerItem>
                    ))}
                    <Profile>
                        <ProfileAvatar /> {/*need to provide an src={} */}
                        <ProfileInfo>
                            <ProfileName>Admin</ProfileName>
                            <ProfileRole>Admin</ProfileRole>
                        </ProfileInfo>
                        <ProfileButton onClick={(e) => {
                            e.preventDefault()
                            setIsLogoutShown(p => !p)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.3334 14.1667L17.5 10L13.3334 5.83337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 10H7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Log out</span>
                        </ProfileButton>
                    </Profile>
                </NavBurger>
            </NavigationMobile>
        </Container>
    )
}