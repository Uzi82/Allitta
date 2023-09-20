import { useQuery } from "react-query"
import { Content, Header, List } from "./styled"
import { Spinner, getMostPopular, ProductCard } from '../'

export const MostPopular: React.FC = () => {
    const { data, isLoading, isError} = useQuery('mostPopular', getMostPopular, {
        refetchOnWindowFocus: false
    })
    if(isError) console.error('BestDeals: Query error')
    return(
        <Content>
            <Header>
                Most Popular Products
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