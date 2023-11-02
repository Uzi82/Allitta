import { useQuery } from "react-query"
import { CreateShopModal, 
         LazyLoad, 
         SimpleBlur, 
         getShops, 
         openModal, 
         setId, 
         useAppDispatch, 
         useAppSelector, 
         useJWT
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
import { useNavigate } from "react-router-dom"

export const ShopChoose: React.FC = () => {
    const jwt = useJWT()
    const { data, isFetching, isError } = useQuery(['shopChoose', { jwt }], () => getShops(jwt), {
        refetchOnWindowFocus: false
    })
    if(isError) console.error('ShopChoose: Query error')
    const navigate = useNavigate()
    const modal = useAppSelector(state=>state.products)
    const dispatch = useAppDispatch()
    const redirect = (id: string)=>{
        dispatch(setId(parseInt(id)))
        navigate('/shop/dashboard')
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
                        : data !== undefined && data.data.map(el=><Shop key={el.id} onClick={()=>redirect(el.id)}>
                            <ShopImg $img={el.logotype_path} />
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