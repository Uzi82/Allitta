import { useLocation } from "react-router-dom"
import { SeeMore } from "../../../UI/SeeMore"
import { AccountsData } from "../models/data"
import { AccountButton } from "./AccountButton"
import {
    AccountsWrapper,
    Row,
    AccountsItem,
    CustomerName,
    Date,
    Id,
    IdHeader,
    TypeOfUser,
    VerificationType,
} from "./styled"


export const Accounts: React.FC = () => {
    const title = useLocation().pathname.split('/')[2] === 'dashboard' ? 'New Accounts' : 'Accounts'
    return (
        <AccountsWrapper>
            <Row>
                <IdHeader>{title}</IdHeader>
                <CustomerName>Customer Name</CustomerName>
                <Date>Registered Date</Date>
                <VerificationType>AC. Verification</VerificationType>
                <TypeOfUser>Type</TypeOfUser >
                <div style={{ width: '13px' }}></div >
            </Row>
            {AccountsData.map(({ date, id, name, type, verification }) => (
                <AccountsItem key={id}>
                    <Id>#{id}</Id>
                    <CustomerName>{name}</CustomerName>
                    <Date>{date}</Date>
                    <VerificationType>
                        <AccountButton type={verification} />
                    </VerificationType>
                    <TypeOfUser>{type}</TypeOfUser>
                    <SeeMore />
                </AccountsItem>
            ))}
        </AccountsWrapper>
    )
}