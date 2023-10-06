import { useAppDispatch, type Props, open } from "../"
import { Content, 
         ElTitle, 
         ElValue, 
         Exit, 
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
         Ready,
         ReadyBtn,
         ReadyCurrency,
         ReadyInput,
         ReadyPrice
} from "./styled"

export const DeliveryModal: React.FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch()
    return(
        <Content>
            <Head>
                <Info>
                    <InfoEl>
                        <InfoTitle>
                            Name
                        </InfoTitle>
                        <InfoName>
                             Supun Sameera  {/* Добавить данные из запроса */}
                        </InfoName>
                    </InfoEl>
                    <InfoEl>
                        <InfoTitle>
                            Address
                        </InfoTitle>
                        <InfoText>
                            42B/3, Buddhaloka mawatha, Suwarapola, Piliyandala  {/* Добавить данные из запроса */}
                        </InfoText>
                    </InfoEl>
                    <InfoEl>
                        <InfoTitle>
                            Telephone / Mobile
                        </InfoTitle>
                        <InfoText>
                            076 1 234 567  {/* Добавить данные из запроса */}
                        </InfoText>
                    </InfoEl>
                    <Exit onClick={() => dispatch(open())} />
                </Info>
                <Message>
                    <MessageTitle>
                        Message
                    </MessageTitle>
                    <MessageText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </MessageText>
                </Message>
            </Head>
            <Products>
                <List>
                    <Product>
                        <ProductImg />
                        <ProductName>
                            Nike modern 5 shoes for men
                        </ProductName>
                        <div>{/* Пустой div для grid */}</div>
                        <ProductEl>
                            <ElTitle>
                                Quantity
                            </ElTitle>
                            <ElValue>
                                5x
                            </ElValue>
                        </ProductEl>
                        <ProductEl $right>
                            <ElTitle>
                                Total Price
                            </ElTitle>
                            <ElValue>
                                100,000.00
                            </ElValue>
                        </ProductEl>
                    </Product>
                    <Product>

                    </Product>
                    <Product>

                    </Product>
                    <Product>

                    </Product>
                    <Product>

                    </Product>
                    <Product>

                    </Product>
                    <Product>

                    </Product>
                </List>
            </Products>
            <Ready>
                <ReadyPrice>
                    <ReadyCurrency>
                        Rs.
                    </ReadyCurrency>
                    <ReadyInput type="number" placeholder="Delivery Charges" />
                </ReadyPrice>
                <ReadyBtn>
                    Package Ready
                </ReadyBtn>
            </Ready>
        </Content>
    )
}