import { Outlet } from "react-router-dom"
import { Header, Footer, FlexCenter, CartModal } from "../"
export const Layout: React.FC = () => {
    return(
        <FlexCenter>
            <Header />
                <CartModal />
                <Outlet />
            <Footer />
        </FlexCenter>
    )
}