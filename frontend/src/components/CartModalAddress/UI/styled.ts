import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 626px) {
        padding: 10px;
    }
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 626px) {
        font-size: 24px;
    }
`

export const Cost = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const CostText = styled.p`
    color: black;
    opacity: 0.7;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Price = styled.h2`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const CheckOut = styled.button`
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
    background: #5D20D6;
    border: 2px solid #5D20D6;
    height: 50px;
    color: #FFF;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition-duration: 300ms;
    &:hover {
        color: #5D20D6;
        background-color: inherit;
    }
`

export const BottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: auto;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const InfoEl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export const InfoHead = styled.h3`
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

export const InfoData = styled.p`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: break-all;
`