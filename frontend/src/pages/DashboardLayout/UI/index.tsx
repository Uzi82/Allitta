import { useEffect } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { Container, Content, Header, OutletContainer, SideBlock } from "./styled"
import { DashboardNav } from "../../../components/DashboardNav"
import moment from "moment"

export const DashboardLayout: React.FC = () => {
    const location = useLocation().pathname.split('/')[2]
    let date = new Date()
    console.log(date)
    return(
        <Container>
            <SideBlock>
                <DashboardNav active={location}/>
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