import { StyledInput, Categories, BestDeals, ChooseShop, MostPopular, TrandingProducts } from "../"
import { Content, Purple, Search, SearchHead, SearchText } from "./styled"
export const Home: React.FC = () => {
    return(
        <Content>
            <Search>
                <SearchText>
                    <SearchHead>
                        Find the Best Products with <Purple>Reliability</Purple>
                        <StyledInput placeholder="Search Here Shop or Product" btnText="Search" width={'100%'} heigth={45} chngClr/>
                    </SearchHead>
                </SearchText>
            </Search>
            <Categories />
            <BestDeals />
            <ChooseShop />
            <MostPopular />
            <TrandingProducts />
        </Content>
    )
}