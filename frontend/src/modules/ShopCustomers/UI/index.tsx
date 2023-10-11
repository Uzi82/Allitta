import { useQuery } from "react-query"
import { CustomerInfoModal, Search, SimpleBlur, getCustomers, openModal, useAppDispatch, useAppSelector } from "../"
import { Container,
         Customer,
         CustomerEl,
         Customers,
         Head, 
         List, 
         ListHead,
         ListHeadEl,
         Modal
} from "./styled"
import { useState } from "react"

export const ShopCustomers: React.FC = () => {
    const [name, setName] = useState<string>('')
    const { data, isFetching, isError } = useQuery(['ShopCustomers', { name }], () => getCustomers(name), {
        refetchOnWindowFocus: false
    })
    const opened = useAppSelector(state => state.products.opened)
    const dispatch = useAppDispatch()
    if(isError) console.error('ShopCustomers: Query error')
    return(
        <Container>
            <Head>
                <Search $fullOnMobile placeholder="Search Customer" onBlur={(e)=>setName(e.target.value)} />
            </Head>
            <Customers>
                <ListHead>
                    <ListHeadEl>
                        Customer Name
                    </ListHeadEl>
                    <ListHeadEl>
                        Customer Email
                    </ListHeadEl>
                    <ListHeadEl>
                        Orders Count
                    </ListHeadEl>
                    <ListHeadEl>
                        Successful Deliveries
                    </ListHeadEl>
                    <ListHeadEl>
                        Total Income
                    </ListHeadEl>
                </ListHead>
                <List>
                    {
                        isFetching
                            ? <></>
                            : data !== undefined && data.map(el => <Customer key={el.id}>
                                <CustomerEl>
                                    {
                                        el.name
                                    }
                                </CustomerEl>
                                <CustomerEl>
                                    {
                                        el.email
                                    }
                                </CustomerEl>
                                <CustomerEl $halfHidden>
                                    { el.orders } Orders
                                </CustomerEl>
                                <CustomerEl $halfHidden>
                                    { el.deliveries } Orders
                                </CustomerEl>
                                <CustomerEl $halfHidden>
                                    { el.currency } { el.income.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') }
                                </CustomerEl>
                                <Modal onClick={()=>dispatch(openModal({
                                    type: 'customerInfo',
                                    id: el.id,
                                    name: el.name
                                }))} />
                            </Customer>)
                    }
                </List>
            </Customers>
            <SimpleBlur active={opened}>
                <CustomerInfoModal />
            </SimpleBlur>
        </Container>
    )
}