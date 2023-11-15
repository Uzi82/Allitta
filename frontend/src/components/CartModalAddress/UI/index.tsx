import { BottomDiv,
         CheckOut, 
         Content, 
         Cost, 
         CostText, 
         Header,
         Info,
         InfoEl,
         Price,
         InfoHead,
         InfoData
} from "./styled"
import { open,   
         useAppDispatch,  
         useAppSelector
} from "../"

export const CartModalAddress: React.FC = () => {
    const list = useAppSelector(state => state.cart.list)
    const dispatch = useAppDispatch()
    return (
        <Content>
            <Header>
                Shopping Cart
            </Header>
            <Info>
                <InfoEl>
                    <InfoHead>
                        Full Name
                    </InfoHead>
                    <InfoData>
                        Amishka Janith Dissanayake
                    </InfoData>
                </InfoEl>
                <InfoEl>
                    <InfoHead>
                        Address
                    </InfoHead>
                    <InfoData>
                        42B/3, Buddhaloka mawatha, Suwarapola, Piliyandaladsfkjngjsdhfkkghbsdfkbhghbsdgfhbjsdjhbshfdhbgbhsjdfghbjsdfhbjgshjbdfghbjs
                    </InfoData>
                </InfoEl>
                <InfoEl>
                    <InfoHead>
                        Contact Number
                    </InfoHead>
                    <InfoData>
                        076 3 133 646
                    </InfoData>
                </InfoEl>
            </Info>
            <BottomDiv>
                <Cost>
                    <CostText>
                        Total Items Cost
                    </CostText>
                    <Price>
                        {
                            Object.keys(list).length > 0 ? list[Object.keys(list)[0]].currency : ''
                        }
                        &nbsp;
                        {
                            Object.keys(list).length > 0 ? Object.keys(list).map(el=>list[el].price*list[el].amount).reduce((sum, el) => sum + el).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') : '0'
                        }
                    </Price>
                </Cost>
                <CheckOut onClick={() => dispatch(open())}>
                    Confirm & Place Order
                </CheckOut>
            </BottomDiv>
        </Content>
    )
}