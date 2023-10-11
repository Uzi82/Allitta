import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px 5px 0 5px;
`

export const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const Customers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1130px;
    @media screen and (max-width: 1440px) {
        width: 100%;
    }
`

export const ListHead = styled.div`
    padding: 0 20px;
    display: grid;
    column-gap: 5px;
    width: calc(100% - 20px);
    justify-content: space-between;
    grid-template-columns: 15% 20% 15% 20% 12% 5%;
    @media screen and (max-width: 767px) {
        column-gap: 1px;
        grid-template-columns: 18% 21% 15% 20% 14% 0;
    }
`

export const ListHeadEl = styled.h1`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1120px) {
        font-size: 12px;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    max-height: 75vh;
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
        max-height: 50vh;
    }
`

export const Customer = styled.div`
    display: grid;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 10px);
    column-gap: 5px;
    grid-template-columns: 15% 20% 15% 20% 12% 5%;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    min-height: 50px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    @media screen and (max-width: 767px) {
        column-gap: 1px;
        grid-template-columns: 18% 21% 15% 20% 14% 0;
        position: relative;
    }
`

export const CustomerEl = styled.h1<{ $halfHidden?: boolean }>`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: ${({ $halfHidden  }) => $halfHidden !== undefined ? "0.6" : '0.8' };
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1120px) {
        font-size: 12px;
    }
    @media screen and (max-width: 767px) {
        font-size: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`