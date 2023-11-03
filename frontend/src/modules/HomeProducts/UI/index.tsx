import { useQuery } from "react-query"
import { Content, Header, List } from "./styled"
import { getFilteredProducts } from "../models/getFilteredProducts"
import { Pagination } from "../../../components/Pagination"
import React from "react"

export const HomeProducts: React.FC = () => {
    const [page, setPage] = React.useState(1)
    const { data, isLoading, isError } = useQuery('getFilteredProducts', getFilteredProducts, {
        refetchOnWindowFocus: false
    })
    return (
        <Content>
            <Header>
                Products
            </Header>
            <List>
            </List>
            <Pagination count={7} onChange={setPage} />
        </Content>
    )
}