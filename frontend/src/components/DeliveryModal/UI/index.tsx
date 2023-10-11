import { useQuery } from "react-query"
import { useAppDispatch, 
         type Props, 
         open, 
         getInfo, 
         LazyLoad, 
         Exit, 
         statuses 
} from "../"
import { Content, 
         ElTitle, 
         ElValue, 
         Head, 
         Info,
         InfoEl,
         InfoName,
         InfoText,
         InfoTitle,
         List,
         Message,
         MessageText,
         MessageTitle,
         Product,
         ProductEl,
         ProductImg,
         ProductName,
         Products,
         Status,
         ReadyBtn,
         ReadyCurrency,
         ReadyInput,
         ReadyPrice,
         Bill,
         BillNum,
         StatusTitle
} from "./styled"

export const DeliveryModal: React.FC<Props> = ({ id }) => {
    const { data, isFetching, isError } = useQuery(['deliveryInfo', { id }], () => getInfo(id), {
        refetchOnWindowFocus: false
    })
    const dispatch = useAppDispatch()
    if(isError) console.error('DeliveryModal: Quety error')
    return(
        <Content>
            <Exit onClick={() => dispatch(open())} />
            {
                isFetching || data === undefined
                    ? <LazyLoad $height="70vh" $width="100%" />
                    :<>
                    <Head>
                        <Info>
                            <InfoEl>
                                <InfoTitle>
                                    Name
                                </InfoTitle>
                                <InfoName>
                                    {
                                        data.name
                                    }
                                </InfoName>
                            </InfoEl>
                            <InfoEl>
                                <InfoTitle>
                                    Address
                                </InfoTitle>
                                <InfoText>
                                    {
                                        data.address
                                    }
                                </InfoText>
                            </InfoEl>
                            <InfoEl>
                                <InfoTitle>
                                    Telephone / Mobile
                                </InfoTitle>
                                <InfoText>
                                    {
                                        data.telephone
                                    }
                                </InfoText>
                            </InfoEl>
                        </Info>
                        <Message>
                            <MessageTitle>
                                Message
                            </MessageTitle>
                            <MessageText>
                                {
                                    data.message
                                }
                            </MessageText>
                        </Message>
                    </Head>
                    <Products>
                        <List>
                            {
                                data.products.map(el=><Product key={el.id}>
                                    <ProductImg $img={el.img} />
                                    <ProductName>
                                        {
                                            el.name
                                        }
                                    </ProductName>
                                    <div>{/* Пустой div для grid */}</div>
                                    <ProductEl>
                                        <ElTitle>
                                            Quantity
                                        </ElTitle>
                                        <ElValue>
                                            { el.quantity }x
                                        </ElValue>
                                    </ProductEl>
                                    <ProductEl $right>
                                        <ElTitle>
                                            Total Price
                                        </ElTitle>
                                        <ElValue>
                                            { el.totalPrice.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') }
                                        </ElValue>
                                    </ProductEl>
                                </Product>)
                            }
                        </List>
                    </Products>
                    <Status>
                        {
                            data.status === 'ready' 
                                ?<>
                                    <ReadyPrice>
                                        <ReadyCurrency>
                                            {
                                                data.currency
                                            }
                                        </ReadyCurrency>
                                        <ReadyInput type="number" placeholder="Delivery Charges" />
                                    </ReadyPrice>
                                    <ReadyBtn>
                                        Package Ready
                                    </ReadyBtn>
                                </>
                                : <>
                                    <Bill>
                                        Total Bill -
                                        <BillNum>
                                            {
                                                data.currency + ' '
                                            }
                                            {
                                                data.products.map(el=>el.totalPrice).reduce((sum, el) => sum += el).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,')
                                            }
                                        </BillNum>
                                    </Bill>
                                    <StatusTitle $color={statuses[data.status]}>
                                        {
                                            data.status
                                        }
                                    </StatusTitle>
                                </>
                        }
                    </Status>
                    </>
            }
        </Content>
    )
}