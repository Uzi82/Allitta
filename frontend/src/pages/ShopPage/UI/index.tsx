import { ShopContent } from "../../../components/ShopContent";
import { ChooseRating } from "../../../modules/ChooseRating";
import { GoodsByShopCategories } from "../../../modules/GoodsByShopCategories";
import { ChooseShop } from "../../Home";
import { ShopsWrapper } from './styled';
import { getShopInfo } from "../models/getShopInfo";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
    if (isFetching) return <div>Загрузка...</div>
    return (
        <>
            {data &&
                <>
                    <ShopContent data={data.shop[0]}>
                        <ChooseRating />
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