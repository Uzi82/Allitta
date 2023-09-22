import { StatsElement } from "../"
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
                        <StatsElement />
                        <StatsElement />
                        <StatsElement />
                        <StatsElement />
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
                            <BtnImg src={require('./product.png')} />
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
                            <BtnImg src={require('./add.png')} />
                        </Btn>
                    </Buttons>
                </Blocks>
            </Header>
        </Container>
    )
}