import { useQuery } from "react-query"
import { Content, Header, List } from "./styled"
import { ShopCard, Spinner, getShops } from '../'



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
                        ? <Spinner />
                        : data && data?.length > 0
                            ? data.map(el=><ShopCard name={el?.name} amount={el?.amount} image={el?.image} link={el?.link}/>)
                            : <><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /><ShopCard /></>
                }
            </List>
        </Content>
    )
}