import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    position: relative;
    width: 544px;
    padding: 40px 50px;
    @media screen and (max-width: 640px) {
        width: 95vw;
        padding: 30px 10px;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`

export const Btn = styled.button`
    border-radius: 10px;
    border: 1px solid #5D20D6;
    width: 100%;
    height: 45px;
    background: inherit;
    color: black;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #5D20D6;
    }
`

export const Title = styled.h1`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
`