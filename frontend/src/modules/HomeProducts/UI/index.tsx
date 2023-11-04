import { useQuery } from "react-query"
import { Content, MainPage, MainTitle, MainText } from "./styled"
import { getFilteredProducts } from "../models/getFilteredProducts"
import { Pagination } from "../../../components/Pagination"
import React from "react"
import { Search } from "./Search"

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
            <MainPage>
                <MainTitle>
                    Shop Online
                </MainTitle>
                <MainText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </MainText>
                <Search></Search>
            </MainPage>
            <Pagination count={7} onChange={setPage} />
        </Content>
    )
}