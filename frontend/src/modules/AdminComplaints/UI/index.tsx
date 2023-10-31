import React from 'react'
import { ComplaintItem, ComplaintsRow, Wrapper, Id, KindOf, SeeMoreWrapper, SentDate, Subject } from './styled'
import { SeeMore } from '../../../UI/SeeMore'


export const AdminComplaints: React.FC = () => {
    return (
        <Wrapper>
            <ComplaintsRow>
                <Id>Complaint ID</Id>
                <Subject>Subject</Subject>
                <SentDate>Sent Date</SentDate>
                <KindOf>Kind of</KindOf>
                <SeeMoreWrapper></SeeMoreWrapper>
            </ComplaintsRow>
            {[{ id: 1, sentDate: '12/12/2022', subject: 'i hate u', kindOf: 'shop' }].map(({ id, sentDate, subject, kindOf }) =>
                <ComplaintItem key={id}>
                    <Id>#{id}</Id>
                    <Subject>{subject}</Subject>
                    <SentDate>{sentDate}</SentDate>
                    <KindOf>{kindOf}</KindOf>
                    <SeeMoreWrapper><SeeMore /></SeeMoreWrapper>
                </ComplaintItem>)}
        </Wrapper>
    )
}
