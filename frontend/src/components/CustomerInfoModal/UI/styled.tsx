import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    padding: 40px 50px;
    @media screen and (max-width: 767px) {
        gap: 10px;
        padding: 20px;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        gap: 10px;
    }
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
    @media screen and (max-width: 767px) {
        font-size: 16px;
        overflow: hidden;
        padding: 5px 0 5px 0;
    }
`

export const TotalSum = styled.span`
    color: #5D20D6;
`

export const Orders = styled.div`
    height: 60vh;   
    max-height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 10px;
    background: #F4F4F4;
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.10) inset;
    @media screen and (max-width: 767px) {
        padding: 3px;
        max-height: 50vh;
    }
`

export const List = styled.div`
    max-height: 100%;
    width: calc(100%);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
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
    @media screen and (max-width: 767px) {
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`

export const Order = styled.div`
    width: calc(100% - 20px);
    min-height: 50px;
    display: grid;
    align-items: center;
    padding: 0 20px;
    grid-template-columns: 15% 22% 22% 15% 5%;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    position: relative;
    @media screen and (max-width: 767px) {
        width: 100%;
        grid-template-columns: 25% 25% 25% 25% 0;
    }
    @media screen and (max-width: 480px) {
        padding: 0 10px;
    }
`

export const OrderEl = styled.p<{ $center?: boolean }>`
    color: #000;
    font-family: Inter-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    ${({ $center }) => $center && 'text-align: center;'}
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
    @media screen and (max-width: 480px) {
        font-size: 9px;
    }
`

export const Status = styled.div<{ $color: string }>`
    border-radius: 5px;
    border: 1px solid ${({ $color }) => $color };
    background: #FFF;
    padding: 6px 5px;
    color: ${({ $color }) => $color };
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    min-width: 95px;
    justify-self: center;
    width: fit-content;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
        min-width: 50px;
    }
`