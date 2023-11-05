import { useQuery } from "react-query"
import { Content, Main, MainTitle, MainText, ProductsList } from "./styled"
import { getFilteredProducts } from "../models/getFilteredProducts"
import { Pagination } from "../../../components/Pagination"
import React from "react"
import { Search } from "./Search"
import { Filters } from "./Filters"

export const HomeProducts: React.FC = () => {
    const [page, setPage] = React.useState(1)
    const { data, isLoading, isError } = useQuery('getFilteredProducts', getFilteredProducts, {
        refetchOnWindowFocus: false
    })

    if (!data) {
        return <div>no products</div>
    }
    return (
        <Content>
            <Main>
                <MainTitle>Shop Online</MainTitle>
                <MainText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</MainText>
                <Search />
            </Main>
            <Content>
                <Filters />
                <ProductsList>
                    {data.map((product) => (
                        <div key={product.id}>{product.name}</div>
                    ))}
                </ProductsList>
            </Content>
            <Pagination count={7} onChange={setPage} />
        </Content>
    )
}