import styled from "styled-components"

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 0 0 0;
    gap: 30px;
    overflow: hidden;
`

export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;
    height: calc(100vh - 120px);
    @media screen and (max-width: 1440px) {
        align-items: flex-start;
    }
    @media screen and (max-width: 767px) {
    }
`

export const Head = styled.div`
    padding: 0 20px;
    display: grid;
    width: 1130px;
    grid-template-columns: 120px 160px 220px 140px 100px auto 30px;
    column-gap: 30px;
    @media screen and (max-width: 1440px) {
        width: calc(100% - 18px);
        grid-template-columns: 13% 17% 10% 15% 10% auto 10px;
    }
    @media screen and (max-width: 767px) {
        width: calc(100% - 18px);
        column-gap: 5px;
        grid-template-columns: 18% 22% 0 15% 20% auto 0;
    }
`

export const HeadEl = styled.p<{ $center?: boolean }>`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    ${({ $center }) => $center && `text-align: center;`}
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`

export const Order = styled.div`
    position: relative;
    border-radius: 10px;
    width: 1110px;
    min-height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    display: grid;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    grid-template-columns: 120px 160px 220px 140px 100px auto 10px;
    column-gap: 30px;
    @media screen and (max-width: 1440px) {
        width: calc(100% - 18px);
        grid-template-columns: 13% 17% 10% 15% 10% auto 10px;
    }
    @media screen and (max-width: 767px) {
        width: calc(100% - 18px);
        column-gap: 5px;
        grid-template-columns: 18% 22% 0 15% 20% auto 0;
    }
`

export const OrderEl = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
    transition-duration: 300ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 1130px;
    max-height: 90%;
    animation-name: appear;
    animation-duration: 1s;
    overflow-y: scroll;
    overflow-x: hidden;
    @keyframes appear {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #F3F3F3;
        border-radius: 11px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #C1C1C1;
        width: 8px;
        border-radius: 9px;
    }
    @media screen and (max-width: 1440px) {
        width: 100%;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            width: 4px;
        }
    }
`

export const Status = styled.div<{ $color: string }>`
    border: 1px solid ${({ $color }) => $color};
    color: ${({ $color }) => $color};
    border-radius: 5px;
    height: 30px;
    width: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    margin: 0 auto;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
        width: auto;
        padding: 5px 10px;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`