import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
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
`