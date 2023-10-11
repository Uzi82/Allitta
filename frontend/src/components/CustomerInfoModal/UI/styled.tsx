import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    padding: 40px 50px;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

export const InfoHead = styled.h1`
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

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Name = styled.h1 `
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const InfoEl = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    max-width: 285px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Total = styled.div`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    padding: 15px 0 30px 0;
    border-bottom: 0.5px solid black;
    &:hover {
        opacity: 1;
    }
`

export const TotalSum = styled.span`
    color: #5D20D6;
`

export const Orders = styled.div`
    height: 60vh;   
    max-height: 60vh;
    width: 100%;
    border-radius: 15px;
    background: #F4F4F4;
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.10) inset;
`

export const List = styled.div`
    max-height: 100%;
    width: calc(100% - 20px);
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: inherit;
        border-radius: 11px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #C1C1C1;
        width: 8px;
        border-radius: 9px;
    }
`