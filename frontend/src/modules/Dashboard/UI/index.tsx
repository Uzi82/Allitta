import { useQuery } from "react-query"
import {
    DashboardPie,
    LazyLoad,
    NewOrders,
    StatsElement,
    getInfo,
    infoElements,
    useAppSelector,
    useJWT
} from "../"
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
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const Dashboard: React.FC = () => {
    const id = useAppSelector(state => state.shop.id)
    const navigate = useNavigate()
    const JWT = useJWT()
    const getInfoQuery = useQuery(['getInfoAboutShop', { JWT, id }], () => getInfo(JWT, id))
    useEffect(
        () => {
            if (id === -1) navigate('/shop/')
        },
        [JWT, id, navigate]
    )
    return (
        <Container>
            <Header>
                <Blocks>
                    <Stats>
                        {
                            getInfoQuery.isFetching
                                ?
                                <>
                                    <LazyLoad $width="100%" $height="100%" />
                                    <LazyLoad $width="100%" $height="100%" />
                                    <LazyLoad $width="100%" $height="100%" />
                                    <LazyLoad $width="100%" $height="100%" />
                                </>
                                : getInfoQuery.data !== undefined && Object.keys(getInfoQuery.data.summary).map((el, index) =>
                                    <StatsElement key={index} amount={getInfoQuery.data !== undefined && getInfoQuery.data.summary[el]} title={infoElements[el][0]} img={infoElements[el][1]} />
                                )
                        }
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