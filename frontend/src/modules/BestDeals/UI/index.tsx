import { useQuery } from "react-query"
import { Content, Header, List } from "./styled"
import { Spinner, getDeals, ProductCard } from '../'

export const BestDeals: React.FC = () => {
    const { data, isLoading, isError} = useQuery('bestDeals', getDeals, {
        refetchOnWindowFocus: false
    })
    if(isError) console.error('BestDeals: Query error')
    return(
        <Content>
            <Header>
                Best Deals For You!
            </Header>
            <List>
                {
                    isLoading
                        ? <Spinner />
                        : data && data?.length > 0
                            ? data.map(el=><ProductCard title={el?.title} price={el?.price} description={el?.description} image={el?.image} />)
                            : <><ProductCard /> <ProductCard /> <ProductCard /> <ProductCard /></>
                }
            </List>
        </Content>
    )
}