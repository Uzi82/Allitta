import { useQuery } from "react-query"
import { useAppSelector, 
         useAppDispatch,
         Exit,
         open,
         getInfo
} from "../"
import { Container, 
         Info, 
         InfoContainer, 
         InfoEl, 
         InfoHead, 
         Name, 
         Orders, 
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
                
            </Orders>
        </Container>
    )
}