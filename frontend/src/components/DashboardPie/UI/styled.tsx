import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 440px;
    border-radius: 9px;
    background: #FFF;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    padding: 25px 30px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 300px;
        height: 100%;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 300px;
        height: 100%;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        height: 100%;
    }
`

export const PieContainer = styled.div`
    width: 210px;
    height: 210px;
    margin-top: 25px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 120px;
        height: 120px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 120px;
        height: 120px;
    }
`

export const Chart = styled.div`
    width: 100%;
    display: flex;
`

export const Text = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        font-size: 14px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        font-size: 14px;
    }
`

export const DescEl = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        gap: 5px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        gap: 5px;
    }
`

export const Color = styled.div<{ $color: string }>`
    width: 20px;
    height: 20px;
    background-color: ${({ $color }) => `${$color}`};
`

export const DescTitle = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        font-size: 10px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        font-size: 10px;
    }
`

export const LowStock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 130px;
    overflow-x: hidden;
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
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        height: 70px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        height: 70px;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            width: 4px;
        }
    }
    @media screen and (max-width: 766px) {
        height: 70px;
        &::-webkit-scrollbar {
            width: 0px;
        }
        &::-webkit-scrollbar-thumb {
            width: 0px;
        }
    }
`

export const LowStockHeader = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const LowStockEl = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #848484;
    display: flex;
    width: 98%;
    justify-content: space-between;
    align-items: center;
`

export const LowStockTitle = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const LowStockRemain = styled.p`
    color: #DD3A3A;
    text-align: right;
    font-family: Inter-Light, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`