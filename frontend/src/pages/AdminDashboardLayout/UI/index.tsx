import { Outlet, useLocation } from "react-router-dom"
import { Container, Content, Header, OutletContainer, SideBlock } from "./styled"
import moment from "moment"
import { AdminDashboardNav } from "../../../components/AdminDashboardNav"

export const AdminDashboardLayout: React.FC = () => {
    const location = useLocation().pathname[2]

    let date = new Date()
    console.log(date)
    return (
        <Container>
            <SideBlock>
                <AdminDashboardNav />
            </SideBlock>
            <Content>
                <Header>
                    <div>{{ 'dashboard': 'Dashboard', 'complaint': 'Complaints & Reporting', 'accounts': 'Accounts Management', 'products': 'Products' }[location]}</div>
                    <div>{moment().format('Do MMMM of YYYY, hh:mm a')}</div>
                </Header>
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </Content>
        </Container>
    )
}