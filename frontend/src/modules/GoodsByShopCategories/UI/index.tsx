import { Content, Header, List } from "./styled"
import { LazyLoad, ProductCard } from '../'
import { Props } from '../models/types';

export const GoodsByShopCategories: React.FC<Props> = ({ title, isLoading, data }) => {
    return(
        <Content>
            <Header>
                {title}
            </Header>
            <List>
                {
                    isLoading
                        ? <LazyLoad $width="1108px" $height="425px" />
                        : data && data?.length > 0
                            ? data.map(el=><ProductCard id={el?.id} key={el?.id} title={el?.name} price={`${el?.cost} ${el?.currency}`} description={el?.description} image={el?.logotype_path
                            } />)
                            : <><ProductCard /> <ProductCard /> <ProductCard /> <ProductCard /></>
                }
            </List>
        </Content>
    )
}