import { DashboardPie, NewOrders, StatsElement } from "../"
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


export const Dashboard: React.FC = () => {
    return(
        <Container>
            <Header>
                <Blocks>
                    <Stats>
                        <StatsElement amount={240} title="Total Products" img={require('./imgs/box.png')} />
                        <StatsElement amount={1200} title="Total Sales" img={require('./imgs/sales.png')} />
                        <StatsElement amount={240} title="Pending Orders" img={require('./imgs/productStar.png')} />
                        <StatsElement amount={240} title="On Proccess to Delivary" img={require('./imgs/delivery-truck.png')} />
                    </Stats>
                    <Line />
                    <Buttons>
                        <Btn>
                            <BtnText>
                                <BtnHeader>
                                    Add new Product
                                </BtnHeader>
                                <BtnSubHeader>
                                    introduce your new product to the market.
                                </BtnSubHeader>
                            </BtnText>
                            <BtnImg src={require('./imgs/product.png')} />
                        </Btn>
                        <Btn>
                            <BtnText>
                                <BtnHeader>
                                    Increase Items
                                </BtnHeader>
                                <BtnSubHeader>
                                    increase the product ha.
                                </BtnSubHeader>
                            </BtnText>
                            <BtnImg src={require('./imgs/add.png')} />
                        </Btn>
                    </Buttons>
                </Blocks>
                <DashboardPie />
            </Header>
            <NewOrders />
        </Container>
    )
}