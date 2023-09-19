import { useQuery } from "react-query"
import { Button, Categories, Category, Content, Header, Text, Title } from "./styled"
import { getCategories } from "../"
import { Spinner } from "../"


export const TrandingProducts: React.FC = () => {
    const { data, isLoading, isError } = useQuery('tradingProducts', getCategories, {refetchOnWindowFocus: false})
    if(isError) console.error('Trading Products: Query error')
    return(
        <>
            <Content>
                {
                    isLoading
                        ? <Spinner />
                        :   <><Header>
                                Tranding Products
                            </Header>
                            <Categories>
                                {
                                    data && data?.length === 2
                                        ? data?.map(el=>{
                                            return(
                                                <Category key={el.id} $image={el.image}>
                                                    <Text>
                                                        <Title>
                                                            {
                                                                el.title
                                                            }
                                                        </Title>
                                                        <Button to={'/'}> 
                                                            Shop Now {/* Link add later */}
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