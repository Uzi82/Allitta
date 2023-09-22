import { useNavigate } from "react-router-dom"
import { Logo, Props, navElements } from "../"
import { Container, Navigation, Element } from "./styled"

export const DashboardNav: React.FC<Props> = ({ active = 'Dashboard'}) => {
    const navigate = useNavigate()
    return(
        <Container>
            <Logo color="#5D20D6">ALLITTA</Logo>
            <Navigation>
                {
                    navElements.map(el=>{
                        return(
                            <Element key={el.title} $active={active === el.title} onClick={() => navigate(`/shopMenu/${el.title}`)}>
                                <img src={active === el.title ? el.active : el.img} />
                                {
                                    el.title
                                }
                            </Element>
                        )
                    })
                }
            </Navigation>
        </Container>
    )
}