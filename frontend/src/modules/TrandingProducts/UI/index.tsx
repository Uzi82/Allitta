import { useQuery } from "react-query"
import { Button, Categories, Category, Content, Header, Text, Title } from "./styled"
import { getCategories } from "../"
import { LazyLoad } from "../"

export const TrandingProducts: React.FC = () => {
    const { data, isLoading, isError } = useQuery('tradingProducts', getCategories, {refetchOnWindowFocus: false})
    if(isError) console.error('Trading Products: Query error')
    return(
        <>
            <Content>
                <Header>
                    Tranding Products
                </Header>
                    {
                        isLoading
                            ? <LazyLoad $height="325px" $width="1108px" />
                            :   <Categories>
                                    {
                                        data && data?.length === 2
                                            ? data?.map(el=>{
                                                return(
                                                    <Category key={el.id} $image={el.banner_path}>
                                                        <Text>
                                                            <Title>
                                                                {
                                                                    el.name
                                                                }
                                                            </Title>
                                                            <Button to={`/categories/${el.id}`}> 
                                                                Shop Now
                                                            </Button>
                                                        </Text>
                                                    </Category>
                                                )
                                            })
                                            : <></>
                                    }
                                </Categories>
                    }
                    
            </Content>
        </>
    )
}