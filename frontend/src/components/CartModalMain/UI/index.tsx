import { useQuery } from "react-query"
import { BottomDiv, BottomText, 
         CheckOut, 
         Content, 
         Cost, 
         CostText, 
         Header, 
         List, 
         Name, 
         Price, 
         Product, 
         ProductLogo, 
         ProductPrice, 
         Products, 
         Text 
} from "./styled"
import { CartIncrement,  
         changeAmount,  
         setId,  
         useAppDispatch,  
         useAppSelector
} from "../"

export const CartModalMain: React.FC = () => {
    const list = useAppSelector(state => state.cart.list)
    const dispatch = useAppDispatch()
    const amount = (inc: boolean, elAmount: number, elId: string) => dispatch(changeAmount({
        id: elId,
        newAmount: inc ? elAmount + 1 : elAmount - 1
    }))
    return (
        <Content>
            <Header>
                Shopping Cart
            </Header>
            <Products>
                <List>

                    {
                        Object.keys(list).length > 0 && Object.keys(list).map(id => {
                        let el = list[id]
                        if(el !== undefined) return <Product key={el.id}>
                            <ProductLogo src={el.logotype_path} />
                            <Text>
                                <Name>{ el.name }</Name>
                                <BottomText>
                                    <CartIncrement increment={()=>amount(true, el.amount, el.id)} value={el.amount} decrement={()=>amount(false, el.amount, el.id)} />
                                    <ProductPrice>
                                        { el.currency } { (el.price * el.amount).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') }
                                    </ProductPrice>
                                </BottomText>
                            </Text>
                        </Product>
                        return <></>
                        })
                    }
                </List>
            </Products>
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
                <CheckOut onClick={() => dispatch(setId('address'))}>
                    Check out
                </CheckOut>
            </BottomDiv>
        </Content>
    )
}