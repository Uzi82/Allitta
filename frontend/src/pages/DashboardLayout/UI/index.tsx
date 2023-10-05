import { Outlet, useLocation } from "react-router-dom"
import { Container, Content, Header, MenuBtn, OutletContainer, SideBlock, TopLine } from "./styled"
import moment from "moment"
import { useAppDispatch,
         DashboardNav,
         open,
         useAppSelector
} from "../"

export const DashboardLayout: React.FC = () => {
    const location = useLocation().pathname.split('/')[2].replace(/^[a-z]/, letter=>letter.toUpperCase())
    const dispatch = useAppDispatch()
    const scroll = useAppSelector(state => state.shopMenuBurger.opened)
    return(
        <Container $scroll={scroll}>
            <SideBlock>
                <DashboardNav active={location}/>
                <TopLine>
                    <MenuBtn onClick={() => dispatch(open())} />
                </TopLine>
            </SideBlock>
            <Content>
                <Header>
                    <div>{location}</div>
                    <div>{moment().format('Do MMMM of YYYY, hh:mm a')}</div>
                </Header>
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </Content>
        </Container>
    )
}