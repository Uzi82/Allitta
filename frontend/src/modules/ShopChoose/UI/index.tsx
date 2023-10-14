import { useQuery } from "react-query"
import { CreateShopModal, 
         LazyLoad, 
         SimpleBlur, 
         getShops, 
         openModal, 
         useAppDispatch, 
         useAppSelector 
} from "../"
import { AddShop, 
         AddShopPng, 
         Container, 
         Head, 
         List,
         Shop,
         ShopImg,
         ShopName
} from "./styled"

export const ShopChoose: React.FC = () => {
    const { data, isFetching, isError } = useQuery('shopChoose', getShops)
    if(isError) console.error('ShopChoose: Query error')
    const modal = useAppSelector(state=>state.products)
    const dispatch = useAppDispatch()
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
                <AddShop onClick={()=>dispatch(openModal({
                    type: 'createShop',
                    id: ''
                }))}>
                    Create Shop
                    <AddShopPng />
                </AddShop>
            </List>
            <SimpleBlur customWidth active={modal.opened && modal.type === 'createShop'}>
                <CreateShopModal />
            </SimpleBlur>
        </Container>
    )
} 