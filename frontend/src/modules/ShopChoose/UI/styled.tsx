import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 767px) {
        min-height: 50vh;
    }
`

export const Head = styled.h1`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    max-height: 75vh;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
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
    @media screen and (max-width: 1400px) {
        overflow-y: auto;
        flex-wrap: nowrap;
    }
    @media screen and (max-width: 767px) {
        max-height: 60vh;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`

export const Shop = styled.button`
    height: 110px;
    margin-left: 5px;
    min-width: 340px;
    padding: 20px 30px; 
    border-radius: 20px;
    background: #FFF;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 30px;
    transition-duration: 300ms;
    &:hover {
        box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.19);
        scale: 0.9;
    }
`

export const ShopImg = styled.div<{ $img?: FileList }>`
    min-height: 70px;
    min-width: 70px;
    border-radius: 50%;
    ${({ $img }) => $img !== undefined && `background-image: url(${$img});`}
    background-position: center;
    background-color: #D9D9D9;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const ShopName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const AddShop = styled.button`
    height: 110px;
    margin-left: 5px;
    min-width: 340px;
    padding: 20px 30px; 
    border-radius: 20px;
    border: 2px dashed black;
    background: rgba(243, 243, 243, 0.00);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 30px;
    transition-duration: 300ms;
    opacity: 0.6;
    color: black;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
        opacity: 1;
    }
`

export const AddShopPng = styled.div`
    min-width: 30px;
    min-height: 30px;
    background-image: url(${require('./add.png')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`