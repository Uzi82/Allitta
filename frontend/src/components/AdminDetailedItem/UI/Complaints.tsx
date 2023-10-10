import React from 'react'
import { ComplaintsItem, ComplaintsRow, ComplaintsWrapper, Id, SentDate, Subject, Subtitle } from './styled'
import { SeeMore } from '../../../UI/SeeMore'

interface IComplaint {
    id: number
    subject: string
    sentDate: string
}
export const Complaints: React.FC<{ data: IComplaint[] }> = ({ data }) => {
    return (
        <ComplaintsWrapper>
            <Subtitle>Complaints</Subtitle>
            <ComplaintsRow>
                <Id>Complaint ID</Id>
                <Subject>Subject</Subject>
                <SentDate>Sent Date</SentDate>
            </ComplaintsRow>
            {data.map(({ id, sentDate, subject }) =>
                <ComplaintsItem key={id}>
                    <Id>#{id}</Id>
                    <Subject>{subject}</Subject>
                    <SentDate>{sentDate}</SentDate>
                    <SeeMore />
                </ComplaintsItem>)}
        </ComplaintsWrapper>
    )
}
