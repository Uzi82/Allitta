import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderDiv = styled.div`
    border: 1px solid #D9D9D9;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(20px);
    width: 100vw;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 766px) {
        height: 30px;
    }
`

export const HeaderContent = styled.div`
    width: 1108px;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(100vw - 10px);
        padding: 0 5px;
    }
    @media screen and (max-width: 766px) {
        width: calc(100vw - 20px);
        padding: 0 10px;
    }
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 57px;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        gap: 20px;
    }
    @media screen and (max-width: 766px) {
        display: none;
    }
`

export const LinkText = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    transition-duration: 300ms;
    &:hover {
        color: #5D20D6;
        font-size: 15px;
    }
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px;
    }
`

export const Sign = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
    align-items: center;
    @media screen and (max-width: 766px) {
        gap: 5px;
    }
`

export const Button = styled(Link)`
    width: 91px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5D20D6;
    border-radius: 100px;
    border: 2px solid #5D20D6;
    color: #FFF;
    text-align: center;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 2px;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
        background: none;
        color: #5D20D6;
    }
    @media screen and (max-width: 766px) {
        width: 60px;
        height: 20px;
        font-size: 10px;
    }
`