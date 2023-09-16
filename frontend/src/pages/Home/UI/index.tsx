import { ProductCard, FlexCenter, Header, Footer } from "../index"

export const Home: React.FC = () => {
    return(
        <>
            <FlexCenter>
                <Header />
                <ProductCard />
                <Footer />
            </FlexCenter>
        </>
    )
}