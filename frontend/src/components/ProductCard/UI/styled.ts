import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    cursor: pointer;
    gap: 15px;
    background-color: inherit;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        gap: 5px;
    }
    @media screen and (max-width: 766px) {
        gap: 5px;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: break-all;
    width: 262px;
    padding: 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 14px; 
        width: calc(20vw - 20px);
    }
`

export const Price = styled.p`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 262px;
    padding: 0 2px;
    margin: 5px 0;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px; 
        width: calc(20vw - 20px);
    }
`

export const Desctiption = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: break-all;
    width: 262px;
    padding: 0 2px;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px;
        width: calc(20vw - 20px);
        margin: 0;
    }
`