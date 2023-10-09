import { Outlet, useLocation } from "react-router-dom"
import { Container, Content, Header, OutletContainer, SideBlock } from "./styled"
import moment from "moment"
import { AdminDashboardNav } from "../../../components/AdminDashboardNav"

export const AdminDashboardLayout: React.FC = () => {
    const header = { 'dashboard': 'Dashboard', 'complaint': 'Complaints & Reporting', 'accounts': 'Accounts Management', 'products': 'Products' }[useLocation().pathname.split('/')[2]]
    return (
        <Container>
            <SideBlock>
                <AdminDashboardNav />
            </SideBlock>
            <Content>
                <Header>
                    <div>{header}</div>
                    <div>{moment().format('Do MMMM of YYYY, hh:mm a')}</div>
                </Header>
                <Outlet />
            </Content>
        </Container>
    )
}