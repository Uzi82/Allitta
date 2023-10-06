import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 50px;
`

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 0.5px solid #848484;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const InfoEl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const InfoTitle = styled.h1`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
`

export const InfoText = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 285px;
`

export const InfoName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Exit = styled.button`
    width: 25px;
    height: 25px;
    background-image: url(${require('./close.png')});
    background-color: inherit;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const MessageTitle = styled.h1`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
`

export const MessageText = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 912px;
`