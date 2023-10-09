import { useLocation, useNavigate } from "react-router-dom"
import { Logo, navElements } from "../"
import { Container, Navigation, Element, Img, NavigationMobile, NavBurger, NavBurgerItem } from "./styled"
import { Burger } from "./Burger"
import React from "react"
export const AdminDashboardNav: React.FC = () => {
    const [burgerActive, setBurgerActive] = React.useState(false)
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')[2]
    return (
        <Container>
            <Logo color="#5D20D6">ALLITTA</Logo>
            <Navigation>
                {navElements.map(navItem => (
                    <Element key={navItem.title} $active={navItem.title.toLowerCase() === location} onClick={() => navigate(`/admin/${navItem.title.replace(/[A-Z]/g, (u) => u.toLowerCase())}`)}>
                        <Img src={navItem.img} />
                        <span>{navItem.title}</span>
                    </Element>
                ))}
            </Navigation>
            <NavigationMobile>
                <Burger active={burgerActive} setActive={setBurgerActive} />
                <NavBurger $active={burgerActive}>
                    {navElements.map(navItem => (
                        <NavBurgerItem key={navItem.title} $active={navItem.title.toLowerCase() === location} onClick={() => {
                            navigate(`/admin/${navItem.title.replace(/[A-Z]/g, (u) => u.toLowerCase())}`)
                            setBurgerActive(false)
                        }}>
                            <Img src={navItem.img} />
                            <span>{navItem.title}</span>
                        </NavBurgerItem>
                    ))}
                </NavBurger>
            </NavigationMobile>
        </Container>
    )
}