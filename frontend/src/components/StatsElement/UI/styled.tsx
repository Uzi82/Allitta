import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;
    color: #5D20D6;
    transition-duration: 300ms;
    &:hover {
        background-color: rgba(93,32,214,0.1);
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Amount = styled.h1`
    font-family: Inter-Bold, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Title = styled.p`
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
`