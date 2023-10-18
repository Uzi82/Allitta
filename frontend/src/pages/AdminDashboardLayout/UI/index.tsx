import { Outlet, useLocation } from "react-router-dom"
import { Container, Content, Header, SideBlock } from "./styled"
import moment from "moment"
import { AdminDashboardNav } from "../../../components/AdminDashboardNav"
import { Logout } from "../../../components/Logout"
import React from "react"

export const AdminDashboardLayout: React.FC = () => {
    const [isLogoutShown, setIsLogoutShown] = React.useState(false)

    const header = { 'dashboard': 'Dashboard', 'complaint': 'Complaints & Reporting', 'accounts': 'Accounts Management', 'products': 'Products' }[useLocation().pathname.split('/')[2]]
    return (
        <Container>
            <SideBlock>
                <AdminDashboardNav {...{ setIsLogoutShown }} />
            </SideBlock>
            <Content>
                <Header>
                    <div>{header}</div>
                    <div>{moment().format('Do MMMM of YYYY, hh:mm a')}</div>
                </Header>
                {isLogoutShown ?
                    <Logout {...{ isLogoutShown, setIsLogoutShown }} />
                    :
                    <Outlet />
                }
            </Content>
        </Container>
    )
}