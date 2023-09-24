import { useNavigate } from "react-router-dom"
import { Logo, Props, lowerCase, navElements } from "../"
import { Container, Navigation, Element, Img } from "./styled"

export const DashboardNav: React.FC<Props> = ({ active = 'Dashboard'}) => {
    const navigate = useNavigate()
    return(
        <Container>
            <Logo color="#5D20D6">ALLITTA</Logo>
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
        </Container>
    )
}