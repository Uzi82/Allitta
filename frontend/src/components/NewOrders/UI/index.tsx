import { 
    Container, 
    Head, 
    HeadEl, 
    HeadTitle,
    Order,
    OrderEl,
    OrderLink,
    Status
} from "./styled"
import { Props } from "../"


export const NewOrders: React.FC<Props> = ({ new_orders }) => {
    return(
        <Container>
            <Head>
                <HeadTitle>
                    New Orders
                </HeadTitle>
                <HeadEl>
                    Customer Name
                </HeadEl>
                <HeadEl> {/* Элемент пустого места в центре */} </HeadEl>
                <HeadEl>
                    Ordered Date
                </HeadEl>
                <HeadEl>
                    Amount
                </HeadEl>
                <HeadEl>
                    Status  
                </HeadEl>
            </Head>
            {
                new_orders !== undefined && new_orders.map(el=>
                <Order key={el.id}>
                            <OrderEl>
                                #{ el.id }
                            </OrderEl>
                            <OrderEl>
                                { el.customer_name }
                            </OrderEl>
                            <OrderEl> {/* Элемент пустого места в центре */} </OrderEl>
                            <OrderEl>
                                { el.ordered_date }
                            </OrderEl>
                            <OrderEl>
                                { el.currency }{ el.amount }
                            </OrderEl>
                            <OrderEl>
                                <Status $process={el.status === 1 ? false : true}>
                                    { el.status }
                                </Status>
                            </OrderEl>
                            <OrderLink to={`/order/${el.id}`} />
                        </Order>
                    )
            }
        </Container>
    )
}