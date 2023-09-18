import { ProductCard, FlexCenter, Header, Footer, StyledInput, Categories, BestDeals } from "../"
import { Content, Purple, Search, SearchHead, SearchText } from "./styled"
export const Home: React.FC = () => {
    return(
        <>
            <FlexCenter>
                <Header />
                <Content>
                    <Search>
                        <SearchText>
                            <SearchHead>
                                Find the Best Products with <Purple>Reliability</Purple>
                                <StyledInput btnText="Search" width={356} heigth={45} chngClr/>
                            </SearchHead>
                        </SearchText>
                    </Search>
                    <Categories />
                    <BestDeals />
                </Content>
                <Footer />
            </FlexCenter>
        </>
    )
}