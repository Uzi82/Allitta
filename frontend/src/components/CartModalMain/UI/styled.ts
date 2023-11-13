import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 626px) {
        padding: 10px;
    }
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 626px) {
        font-size: 24px;
    }
`

export const Cost = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const CostText = styled.p`
    color: black;
    opacity: 0.7;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Price = styled.h2`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const CheckOut = styled.button`
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
    background: #5D20D6;
    border: 2px solid #5D20D6;
    height: 50px;
    color: #FFF;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition-duration: 300ms;
    &:hover {
        color: #5D20D6;
        background-color: inherit;
    }
`

export const BottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Products = styled.div`
    width: 100%;
    height: 75%;
    border-radius: 15px;
    background: #F4F4F4;
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.10) inset;
    padding: 20px;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 10px;
    width: 100%;
    height: 100%;
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
`

export const Product = styled.div`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);
    width: calc(100% - 10px);
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const ProductLogo = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 10px;
    background: #D9D9D9;
    object-fit: contain;
    object-position: center;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 22px);
    width: calc(100% - 90px - 10px);
    justify-content: space-between;
`

export const Name = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`

export const BottomText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProductPrice = styled.h3`
    color: #000;
    text-align: right;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 50%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`