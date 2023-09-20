import styled from 'styled-components'
import { Link } from '../'

export const Content = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: 100vw;
        padding: 0 5px;
    }
    @media screen and (max-width: 767px) {
        width: 100vw;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
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
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 14px;
    }
`

export const ContactDescription = styled.div`
    color: #C8C8C8;
    width: 262px;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: 162px;
        font-size: 12px;
    }
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
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 14px;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
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
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const EmailHeader = styled.div`
    color: white;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 10px 0;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 14px;
    }
`

export const EmailDescription = styled.p`
    color: #C8C8C8;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px;
    }
`