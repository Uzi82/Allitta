import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    @media screen and (min-width: 767px) and (max-width: 1120px){
        width: calc(100vw - 20px);
    }
    @media screen and (max-width: 766px) {
        width: calc(100vw - 20px);
        gap: 10px; 
    }
`

export const CenterSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Element = styled(Link)<{ image: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 168px;
    height: 232px;
    background-size: cover;
    background-position: center;
    background-image: url(${({ image }) => image});
    @media screen and (min-width: 767px) and (max-width: 1120px){
        width: 132px;
        height: 189px;
    }
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        border-radius: 10px;
    }
`

export const ElText = styled.h1`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    padding-top: 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`