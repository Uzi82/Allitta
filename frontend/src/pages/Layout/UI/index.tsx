import { Outlet } from "react-router-dom"
import { Header, Footer, FlexCenter } from "../"

export const Layout: React.FC = () => {
    return(
        <>
            <FlexCenter>
                <Header />
                    <Outlet />
                <Footer />
            </FlexCenter>
        </>
    )
}