import { useState } from "react"
import { filtersOptions,
         type option,
         getOrders,
         LazyLoad,
         statuses,
         useAppDispatch,
         useAppSelector,
         SimpleBlur,
         Search,
         Filters, 
         openModal,
         ListLinkBtn
} from "../"
import { Buttons, 
         Content, 
         Head, 
         HeadEl, 
         List,
         Order, 
         OrderEl, 
         Orders,
         Status
} from "./styled"
import { useQuery } from "react-query"
import { DeliveryModal } from "../../../components/DeliveryModal"

export const ShopOrders: React.FC = () => {
    const [filter, setFilter] = useState<string|null>(null)
    const { data, isLoading, isError } = useQuery(['filtersShopOrders', { filter }], ()=>getOrders(filter), {
        refetchOnWindowFocus: false
    })
    const dispatch = useAppDispatch()
    const { opened, type } = useAppSelector(state => state.products)
    if(isError) console.error('ShopOrders: Query error')
    const changeFilter = (newValue: option | null) => {newValue ? setFilter(newValue.value) : setFilter(null)}
    return(
        <Content>
            <Buttons>
                <Search placeholder="Search Customer" />
                <Filters options={filtersOptions} onChange={changeFilter} classNamePrefix={'Select'} />
            </Buttons>
            <Orders>
                <Head>
                    <HeadEl>
                        Order ID
                    </HeadEl>
                    <HeadEl>
                        Customer Name
                    </HeadEl>
                    <HeadEl />
                    <HeadEl>
                        Ordered Date
                    </HeadEl>
                    <HeadEl>
                        Amount
                    </HeadEl>
                    <HeadEl $center>
                        Status
                    </HeadEl>
                </Head>
                <List>
                    {
                        isLoading
                            ? <LazyLoad $width="100%" $height="100%" />
                            : data !== undefined && data.map(el=>
                                <Order key={el.id}>
                                    <OrderEl>
                                        #{el.id}
                                    </OrderEl>
                                    <OrderEl>
                                        {el.name}
                                    </OrderEl>
                                    <OrderEl />
                                    <OrderEl>
                                        {el.date}
                                    </OrderEl>
                                    <OrderEl>
                                        {el.currency}{el.amount}
                                    </OrderEl>
                                    <Status $color={statuses[el.status.replace(/\s/, '_')]}>
                                        {el.status}
                                    </Status>
                                    <ListLinkBtn onClick={()=>dispatch(openModal({
                                        id: el.id,
                                        type: 'orderInfo'
                                    }))} />
                                </Order>    
                            )
                    }
                </List>
            </Orders>
            <SimpleBlur active={opened && type === 'orderInfo'}>
                <DeliveryModal id="123" />
            </SimpleBlur>
        </Content>
    )
}