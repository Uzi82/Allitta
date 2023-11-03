import { Outlet, useLocation } from "react-router-dom"
import { Container, Content, Header, SideBlock } from "./styled"
import moment from "moment"
import { Logout } from "../../../components/Logout"
import React from "react"
import { CustomerDashboardNav } from "../../../components/CustomerDashboardNav"

export const CustomerDashboardLayout: React.FC = () => {
    const [isLogoutShown, setIsLogoutShown] = React.useState(false)

    const header = { 'profile': 'My Profile', 'complaints': 'Complaints & Reporting', 'cuschat': 'CusChat' }[useLocation().pathname.split('/')[2]]
    return (
        <Container>
            <SideBlock>
                <CustomerDashboardNav {...{ setIsLogoutShown }} />
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