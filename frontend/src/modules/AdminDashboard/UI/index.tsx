import { StatsElement } from "../../Dashboard"
import {
    Blocks,
    Buttons,
    Container,
    Header,
    Line,
    Stats,
    Btn,
    BtnHeader,
    BtnSubHeader,
    BtnImg,
    BtnText
} from "./styled"


export const AdminDashboard: React.FC = () => {
    return (
        <Container>
            <Stats>
                <StatsElement amount={240} title="Total Shoppers" img={require('./imgs/box.png')} />
                <StatsElement amount={1200} title="Total Customers" img={require('./imgs/sales.png')} />
                <StatsElement amount={240} title="Today Total Orders" img={require('./imgs/productStar.png')} />
            </Stats>
            <Line />
        </Container>
    )
}