import { useLocation, useNavigate } from "react-router-dom"
import { Logo, navElements } from "../"
import { Container, Navigation, Element, Img } from "./styled"
export const AdminDashboardNav: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')[2]
    return (
        <Container>
            <Logo color="#5D20D6">ALLITTA</Logo>
            <Navigation>
                {
                    navElements.map(el => {
                        return (
                            <Element key={el.title} $active={el.title.toLowerCase() === location} onClick={() => navigate(`/admin/${el.title.replace(/[A-Z]/g, (u) => u.toLowerCase())}`)}>
                                <Img src={el.img} />
                                {el.title}
                            </Element>
                        )
                    })
                }
            </Navigation>
        </Container>
    )
}