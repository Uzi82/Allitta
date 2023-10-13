import { useQuery } from "react-query"
import { LazyLoad, getShops } from "../"
import { Container, 
         Head, 
         List,
         Shop,
         ShopImg,
         ShopName
} from "./styled"

export const ShopChoose: React.FC = () => {
    const { data, isFetching, isError } = useQuery('shopChoose', getShops)
    if(isError) console.error('ShopChoose: Query error')
    const redirect = (id: string)=>{
        console.log(id)
    }
    return(
        <Container>
            <Head>
                Your shops
            </Head>
            <List>
                {
                    isFetching
                        ? <LazyLoad $height="50vh" $width="640px" />
                        : data !== undefined && data.map(el=><Shop key={el.id} onClick={()=>redirect(el.id)}>
                            <ShopImg $img={el.img} />
                            <ShopName>
                                { el.name }
                            </ShopName>
                        </Shop>)
                }
            </List>
        </Container>
    )
} 