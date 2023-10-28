import { Outlet, useLocation } from "react-router-dom"
import { Container, Content, Header, MenuBtn, OutletContainer, SideBlock, TopLine } from "./styled"
import moment from "moment"
import { useAppDispatch,
         DashboardNav,
         open,
         useAppSelector
} from "../"
import { useState } from "react"

export const DashboardLayout: React.FC = () => {
    let location = useLocation().pathname.split('/')[2]
    if(location!==undefined) location = location.replace(/^[a-z]/, letter=>letter.toUpperCase())
    const dispatch = useAppDispatch()
    const [disabled, setDisabled] = useState<boolean>(false)
    const openedBurger = useAppSelector(state => state.shopMenuBurger.opened)
    const openedModal = useAppSelector(state => state.products.opened)
    const openBurger = () => {
        dispatch(open())
        setDisabled(true)
        setTimeout(()=>setDisabled(false), 200)
    }
    return(
        <Container $scroll={openedBurger || openedModal}>
            <SideBlock>
                <DashboardNav active={location}/>
                <TopLine>
                    <MenuBtn $close={openedBurger || openedModal} onClick={openBurger} disabled={disabled} />
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