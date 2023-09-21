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
                {
                    isLoading
                        ?  <LazyLoad $width="1108px" $height="325px" />
                        :   <><Header>
                                Tranding Products
                            </Header>
                            <Categories>
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
                        </>
                }
            </Content>
        </>
    )
}