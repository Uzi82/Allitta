import { useQuery } from "react-query"
import { 
    Container, 
    Head, 
    HeadEl,
    List
} from "./styled"
import { LazyLoad, 
         getShopProducts
} from "../"
import { ProductComponent } from "./Product"


export const Products: React.FC = () => {
    const { data, isError, isLoading } = useQuery('shopProducts', getShopProducts, {
        refetchOnWindowFocus: false
    })
    if(isError) console.error('NewOrders: Query error')
    return(
        <Container>
            <Head>
                <HeadEl>
                    Product ID
                </HeadEl>
                <HeadEl>
                    Product Name
                </HeadEl>
                <HeadEl>
                    Category
                </HeadEl>
                <HeadEl> {/* Элемент пустого места в центре */} </HeadEl>
                <HeadEl>
                    Quantity
                </HeadEl>
                <HeadEl>
                    Per.Price
                </HeadEl>
                <HeadEl>
                    Status  
                </HeadEl>
            </Head>
            <List>
                {
                    isLoading
                        ? <LazyLoad $width="1110px" $height="350px" />
                        : data && data.length > 0
                            ?   data.map(el=>{
                                return(
                                    <ProductComponent key={el.number} el={el} />
                                )
                            })
                            : <></>
                }
            </List>
        </Container>
    )
}