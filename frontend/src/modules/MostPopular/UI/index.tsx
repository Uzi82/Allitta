import { useQuery } from "react-query"
import { Content, Header, List } from "./styled"
import { LazyLoad, getMostPopular, ProductCard } from '../'

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
                        ? <LazyLoad $width={'1108px'} $height="425px" />
                        : data && data?.length > 0
                            ? data.map(el=><ProductCard key={el?.id} title={el?.name} price={`${el?.cost} ${el?.currency}`} description={el?.description} image={el?.logotype_path} />)
                            : <><ProductCard /> <ProductCard /> <ProductCard /> <ProductCard /></>
                }
            </List>
        </Content>
    )
}