import { useQuery } from "react-query"
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
import { getNewOrders } from "../models/getNewOrders"
import { LazyLoad } from "../../../UI/LazyLoading"


export const NewOrders: React.FC = () => {
    const {data, isError, isLoading} = useQuery('newOrders', getNewOrders, {
        refetchOnWindowFocus: false
    })
    if(isError) console.error('NewOrders: Query error')
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
                isLoading
                    ? <LazyLoad $width="1110px" $height="350px" />
                    : data && data.length > 0
                        ?   data.map(el=>{
                            return(
                                <Order key={el.number}>
                                    <OrderEl>
                                        #{ el.number }
                                    </OrderEl>
                                    <OrderEl>
                                        { el.name }
                                    </OrderEl>
                                    <OrderEl> {/* Элемент пустого места в центре */} </OrderEl>
                                    <OrderEl>
                                        { el.date }
                                    </OrderEl>
                                    <OrderEl>
                                        { el.currency }{ el.coast }
                                    </OrderEl>
                                    <OrderEl>
                                        <Status $process={el.status === 'New' ? false : true}>
                                            { el.status }
                                        </Status>
                                    </OrderEl>
                                    <OrderLink to={`/order/${el.number}`} />
                                </Order>
                            )
                        })
                        : <></>
            }
        </Container>
    )
}