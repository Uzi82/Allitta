import { useQuery } from "react-query"
import { useAppSelector, 
         useAppDispatch,
         Exit,
         open,
         getInfo,
         statuses,
         ListLinkBtn
} from "../"
import { Container, 
         Info, 
         InfoContainer, 
         InfoEl, 
         InfoHead, 
         List, 
         Name, 
         Order, 
         OrderEl, 
         Orders, 
         Status, 
         Total, 
         TotalSum 
} from "./styled"

export const CustomerInfoModal: React.FC = () => {
    const { name, id } = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
    const { data, isError } = useQuery(['CustomerInfoModal', { id }], () => getInfo(id))
    if(isError) console.error('CustomerInfoModal: Query error')
    return(
        <Container>
            <Exit onClick={() => dispatch(open())} />
            <Info>
                <InfoContainer>
                    <InfoHead>
                        Name
                    </InfoHead>
                    <Name>
                        { name }
                    </Name>
                </InfoContainer>
                <InfoContainer>
                    <InfoHead>
                        Address
                    </InfoHead>
                    <InfoEl>
                        { data?.address }
                    </InfoEl>
                </InfoContainer>
                <InfoContainer>
                    <InfoHead>
                        Telephone / Mobile
                    </InfoHead>
                    <InfoEl>
                        { data?.telephone }
                    </InfoEl>
                </InfoContainer>
            </Info>
            <Total>
                Total Earning -&nbsp;
                <TotalSum>
                    { data?.currency } { data?.orders.map(el=>el.price).reduce((sum, newVal) => sum += newVal).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') }
                </TotalSum>
            </Total>
            <Orders>
                <List>
                    {
                        data !== undefined && data.orders.map(el => <Order key={el.id}>
                            <OrderEl>
                                #{ el.id }
                            </OrderEl>
                            <OrderEl $center>
                                { el.date }
                            </OrderEl>
                            <OrderEl $center>
                                { el.currency+el.price.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') }
                            </OrderEl>
                            <Status $color={statuses[el.status.replace(/\s/, '_')]}>
                                { el.status }
                            </Status>
                            <ListLinkBtn />
                        </Order>)
                    }
                </List>
            </Orders>
        </Container>
    )
}