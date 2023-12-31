import { ShopContent } from "../../../components/ShopContent";
import { GoodsByShopCategories, LazyLoad } from "../../../modules/GoodsByShopCategories";
import { ChooseShop } from "../../Home";
import { ShopsWrapper } from './styled';
import { getShopInfo } from "../models/getShopInfo";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { RatingStars } from '../'

export const ShopPage: React.FC = () => {
    let { id } = useParams();

    const { data, isFetching, isError, refetch } = useQuery('shopInfo', () => (id !== undefined ? getShopInfo(id) : null), {
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
      if (id !== undefined) {
        refetch();
      }
    }, [id, refetch])

    if (isError) console.error('Shop: Query error')
    if (isFetching) return <LazyLoad $height="80vh" $width="90%" $m="10px" />
    return (
        <>
            {data &&
                <>
                    <ShopContent data={data.shop[0]}>
                        <RatingStars rating={parseFloat(data.shop[0].rating)} />
                    </ShopContent>
                    {data?.data.map(item => (
                        <GoodsByShopCategories
                            key={item.category_id}
                            title={item.category_name}
                            isLoading={isFetching}
                            data={item.products}
                        />
                    ))}
                    <ShopsWrapper>
                        <ChooseShop />
                    </ShopsWrapper>
                </>
            }
        </>
    )
}