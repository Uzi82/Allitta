import { FlexCenter, Header, Footer, StyledInput, Categories, BestDeals, ChooseShop } from "../"
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
                                <StyledInput placeholder="Search Here Shop or Product" btnText="Search" width={356} heigth={45} chngClr/>
                            </SearchHead>
                        </SearchText>
                    </Search>
                    <Categories />
                    <BestDeals />
                    <ChooseShop />
                </Content>
                <Footer />
            </FlexCenter>
        </>
    )
}