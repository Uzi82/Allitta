import { useQuery } from "react-query"
import { Content, Main, MainTitle, MainText, ProductsList, Wrapper, Card, Text, ImageBackground, Header, Price, Desctiption } from "./styled"
import { getFilteredProducts } from "../models/getFilteredProducts"
import { Pagination } from "../../../components/Pagination"
import React from "react"
import { Search } from "./Search"
import { Filters } from "./Filters"
import { Button } from "../../../UI/Button"
import { useNavigate } from "react-router-dom"

export const HomeProducts: React.FC = () => {
    const navigate = useNavigate()
    const [page, setPage] = React.useState(1)
    const { data } = useQuery('getFilteredProducts', () => getFilteredProducts({ pageCount: page }), {
        refetchOnWindowFocus: false
    })

    if (!data) {
        return <div>no products</div>
    }
    return (
        <Wrapper>
            <Main>
                <MainTitle>Shop Online</MainTitle>
                <MainText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</MainText>
                <Search />
            </Main>
            <Content>
                <Filters />
                <ProductsList>
                    {data.length ? data.map(({ cost, description, id, name, currency, logotype_path }) => (
                        <Card key={id}>
                            <ImageBackground src={logotype_path} />
                            <Text>
                                <Header>{name}</Header>
                                <Price>{cost}</Price>
                                <Desctiption>{description}</Desctiption>
                                <Button width='116px' height='35px' mt={'15px'} onClick={() => navigate(`/products/${id}`)}>Add to cart</Button>
                            </Text>
                        </Card>
                    ))
                        :
                        <div>no products</div>
                    }
                </ProductsList>
            </Content>
            <Pagination count={7} onChange={setPage} />
        </Wrapper>
    )
}