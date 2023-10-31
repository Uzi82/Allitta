import { useQuery } from "react-query"
import { getComplaints } from "../models/getComplaints"
import { ComplaintItem, ComplaintsRow, Wrapper, Id, KindOf, SeeMoreWrapper, SentDate, Subject, ComplaintsWrapper } from './styled'
import { SeeMore } from '../../../UI/SeeMore'
export const CustomerComplaints: React.FC = () => {
    const { data, isError } = useQuery(['CustomerComplaints'], getComplaints, {
        refetchOnWindowFocus: false
    })
    if (isError) console.error('CustomerComplaints: Query error')
    return (
        <Wrapper>
            <ComplaintsRow>
                <Id>Complaint ID</Id>
                <Subject>Subject</Subject>
                <SentDate>Sent Date</SentDate>
                <KindOf>Kind of</KindOf>
                <SeeMoreWrapper></SeeMoreWrapper>
            </ComplaintsRow>
            <ComplaintsWrapper>
                {data === undefined ?
                    <>there isn`t any customers</>
                    :
                    data.map(({ id, sentDate, subject, kindOf }) =>
                        <ComplaintItem key={id}>
                            <Id>#{id}</Id>
                            <Subject>{subject}</Subject>
                            <SentDate>{sentDate}</SentDate>
                            <KindOf>{kindOf}</KindOf>
                            <SeeMoreWrapper><SeeMore /></SeeMoreWrapper>
                        </ComplaintItem>
                    )}
            </ComplaintsWrapper>
        </Wrapper>
    )
}