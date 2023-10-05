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
    const location = useLocation().pathname.split('/')[2].replace(/^[a-z]/, letter=>letter.toUpperCase())
    const dispatch = useAppDispatch()
    const [disabled, setDisabled] = useState<boolean>(false)
    const opened = useAppSelector(state => state.shopMenuBurger.opened)
    const openBurger = () => {
        dispatch(open())
        setDisabled(true)
        setTimeout(()=>setDisabled(false), 200)
    }
    return(
        <Container $scroll={opened}>
            <SideBlock>
                <DashboardNav active={location}/>
                <TopLine>
                    <MenuBtn $close={opened} onClick={openBurger} disabled={disabled} />
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