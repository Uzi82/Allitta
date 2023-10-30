import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    position: relative;
    width: 644px;
    padding: 40px 50px;
    @media screen and (max-width: 640px) {
        width: 95vw;
        padding: 30px 10px;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Btn = styled.button<{ $yes?: boolean }>`
    border-radius: 10px;
    border: 1px solid #5D20D6;
    width: 48%;
    height: 45px;
    background: ${({ $yes }) => $yes===true ? '#5D20D6' : 'inherit' };
    color: ${({ $yes }) => $yes===true ? 'white' : 'black' };
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        background: ${({ $yes }) => $yes===true ? 'inherit' : '#5D20D6' };
        color: ${({ $yes }) => $yes===true ? 'black' : 'white' };
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

export const SubTitle = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`