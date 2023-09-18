import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Element = styled.div<{ image: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 168px;
    height: 232px;
    background-size: cover;
    background-position: center;
    background-image: url(${({ image }) => image});
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