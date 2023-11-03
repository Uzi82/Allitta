import { useQuery } from "react-query"
import { Content, Header, List } from "./styled"
import { getFilteredProducts } from "../models/getFilteredProducts"

export const HomeProducts: React.FC = () => {
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
        </Content>
    )
}