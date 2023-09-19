import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(100vw - 20px);
        gap: 10px; 
    }
    @media screen and (max-width: 766px) {
        width: calc(100vw - 20px);
        gap: 10px; 
    }
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Categories = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        justify-content: space-around;
    }
    @media screen and (max-width: 766px) {
        gap: 10px;
        flex-direction: column;
        align-items: center;
    }
`

export const Category = styled.div<{ $image?: string }>`
    width: 544px;
    height: 325px;
    border-radius: 15px;
    display: flex;
    align-items: flex-end;
    background: ${({$image})=>$image ? `${$image}` : '#D9D9D9'};
    background-position: center;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: 344px;
        height: 225px; 
    }
    @media screen and (max-width: 766px) {
        width: 344px;
        height: 225px; 
    }
`

export const Text = styled.div`
    background: rgba(169, 169, 169, 100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 0px 15px 15px;
    height: 100px;
    width: 100%;
`

export const Title = styled.h1`
    margin: 0 20px;
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Button = styled(Link)`
    width: 120px;
    height: 40px;
    border-radius: 100px;
    background: #D9D9D9;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 20px;
    transition-duration: 120ms;
    border: 0px solid black;
    &:hover {
        border: 4px solid black;
    }
`