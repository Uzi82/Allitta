import { Outlet } from "react-router-dom"
import { Header, Footer, FlexCenter, useAppSelector, CartModal } from "../"
export const Layout: React.FC = () => {
    const cart = useAppSelector(state => { return { opened: state.products.opened, type: state.products.type }})
    return(
        <FlexCenter>
            <Header />
                <CartModal />
                <Outlet />
            <Footer />
        </FlexCenter>
    )
}