import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ContactHeader = styled.div`
    margin: 10px 0;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #C8C8C8;
`

export const ContactDescription = styled.div`
    color: #C8C8C8;
    width: 262px;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const PagesCategories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PagesCategoriesHeader = styled.div`
    color: white;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 10px 0;
`

export const PagesCategoriesElement = styled(Link)`
    color: #C8C8C8;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition-duration: 300ms;
    &:hover {
        color: #fff;
        text-decoration: underline;
    }
`
export const EmailDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    align-items: center;
    justify-content: flex-end;
`

export const EmailInput = styled.input`
    padding: 3px 100px 3px 20px;
    width: 256px;
    height: 45px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(20px);
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const EmailSend = styled.button`
    width: 87px;
    height: 35px;
    border-radius: 100px;
    background: #5D20D6;   
    position: absolute;
    transform: translateX(-5px);
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    border: 2px solid #5D20D6;
    transition-duration: 300ms;
    &:hover {
        background: none;
        border: 2px solid #5D20D6;
    }
`

export const EmailDescription = styled.p`
    color: #C8C8C8;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`