import {useQuery} from "react-query"
import {Content, Header, List} from "./styled"
import {getShops, LazyLoad, ShopCard} from '../'

export const ChooseShop: React.FC = () => {
    const { data, isLoading, isError} = useQuery('shops', getShops, {
        refetchOnWindowFocus: false
    })
    if(isError) console.error('Query error')
    return(
        <Content>
            <Header>
                Choose by Shops
            </Header>
            <List>
                {
                    isLoading
                        ? <LazyLoad width="1108px" height="187px" />
                        : data && data?.length > 0
                            ? data.map(el => <ShopCard key={el?.id} name={el?.name} amount={el?.products_count}
                                                       image={el?.logotype_path} link={`/shops/${el?.id}`}/>)
                            : <><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /></>
                }
            </List>
        </Content>
    )
}
