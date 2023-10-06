import React from 'react'
import { ComplaintsItem, ComplaintsRow, ComplaintsWrapper, Id, Name, SeeMore, Select, SentDate, Subject, Subtitle, Text } from './styled'

interface IComplaints { }

export const Complaints: React.FC<IComplaints> = () => {
    return (
        <ComplaintsWrapper>
            <Subtitle>Complaints</Subtitle>
            <ComplaintsRow>
                <Id>Complaint ID</Id>
                <Subject>Subject</Subject>
                <SentDate>Sent Date</SentDate>
            </ComplaintsRow>
            {[231212135612, 3463463462, 2, 2, 2].map((item) =>
                <ComplaintsItem key={item}>
                    <Id>#{item}</Id>
                    <Subject>my order is not received</Subject>
                    <SentDate>12/12/23</SentDate>
                    <SeeMore src='/svg/seemore.svg'></SeeMore>
                </ComplaintsItem>)}
        </ComplaintsWrapper>
    )
}
