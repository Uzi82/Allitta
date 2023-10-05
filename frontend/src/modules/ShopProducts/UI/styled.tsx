import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 30px;
    @media screen and (max-width: 1023px) {
        padding: 0;
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    @media screen and (max-width: 1023px) {
        justify-content: center;
        gap: 10px;
    }
    @media screen and (max-width: 766px) {
        flex-direction: column;
        align-items: center;   
    }
`

export const AddNew = styled.button`
    width: 215px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 20px;
    border-radius: 9px;
    background: #5D20D6;
    color: #FFF;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 1023px) {
        width: 150px;
        height: 40px;
        font-size: 12px;
    }
    @media screen and (max-width: 766px) {
        width: 90%;
        justify-content: center;
        gap: 10px;
    }
`

export const AddNewPng = styled.img`
    width: 20px;
    height: 20px;
`

export const Search = styled.input`
    width: 335px;
    height: 45px;
    border-radius: 9px;
    border: 1px solid #6F6F6F;
    color: #636363;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition-duration: 300ms;
    padding: 0 20px;
    &:focus {
        color: black;
        border: 1px solid #5D20D6;
    }
    @media screen and (max-width: 1023px) {
        width: 150px;
        height: 40px;;
    }
    @media screen and (max-width: 766px) {
        width: 90%;
    }
`