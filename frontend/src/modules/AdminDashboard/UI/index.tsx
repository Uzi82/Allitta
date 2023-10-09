import { SeeMore } from "../../../components/ProductDetails/UI/SeeMore"
import { StatsElement } from "../../Dashboard"
import { AccountButton } from "./AccountButton"
import {
    Accounts,
    AccountsHeader,
    AccountsItem,
    Container,
    CustomerName,
    Date,
    Id,
    IdHeader,
    Line,
    Stats,
    TypeOfUser,
    VerificationType,
} from "./styled"


export const AdminDashboard: React.FC = () => {
    return (
        <Container>
            <Stats>
                <StatsElement amount={240} title="Total Shoppers" img={require('./imgs/box.png')} />
                <StatsElement amount={1200} title="Total Customers" img={require('./imgs/sales.png')} />
                <StatsElement amount={240} title="Today Total Orders" img={require('./imgs/productStar.png')} />
            </Stats>
            <Line />
            <Accounts>
                <AccountsHeader>
                    <IdHeader>New Accounts</IdHeader>
                    <CustomerName>Customer Name</CustomerName>
                    <Date>Registered Date</Date>
                    <VerificationType>AC. Verification</VerificationType>
                    <TypeOfUser>Type</TypeOfUser >
                    <div style={{ width: '13px' }}></div >
                </AccountsHeader>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <AccountsItem key={item}>
                        <Id>#231212135612</Id>
                        <CustomerName>Ahinsa De Silva</CustomerName>
                        <Date>12/12/23</Date>
                        <VerificationType>
                            <AccountButton type={'verified'} />
                        </VerificationType>
                        <TypeOfUser>Shopper</TypeOfUser>
                        <SeeMore />
                    </AccountsItem>
                ))}
            </Accounts>
        </Container>
    )
}