import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const Head = styled.div`
    display: grid;
    align-items: end;
    width: 1110px;
    grid-column-gap: 10px;
    grid-template-columns: 190px 165px 165px 115px 230px 153px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 100%;
        grid-template-columns: 118.75px 103.125px 103.125px 71.875px 143.75px 95.625px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
        grid-template-columns: 118.75px 103.125px 103.125px 71.875px 143.75px 95.625px;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        grid-column-gap: 3px;
        grid-template-columns: 40px 50px 0px 40px 50px auto 5px;
        padding: 5px 5px;
        height: 30px;
        align-items: center;
    }
`

export const HeadEl = styled.div`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        font-size: 10px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        font-size: 10px;
    }
    @media screen and (max-width: 766px) {
        font-size: 8px;
    }
`

export const HeadTitle = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        font-size: 16px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        font-size: 16px;
    }
    @media screen and (max-width: 766px) {
        font-size: 10px;
    }
`

export const Order = styled.div`
    display: grid;
    align-items: center;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    width: 1110px;
    height: 50px;
    padding: 15px 20px;
    grid-column-gap: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    grid-template-columns: 110px 280px 110px 115px 230px auto 10px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 100%;
        grid-template-columns: 68.75px 175px 68.75px 71.875px 143.75px auto 6.25px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
        grid-template-columns: 68.75px 175px 68.75px 71.875px 143.75px auto 6.25px;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        grid-column-gap: 3px;
        grid-template-columns: 40px 50px 0px 40px 50px auto 5px;
        padding: 5px 5px;
        height: 30px;
    }
`

export const OrderEl = styled.div`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        font-size: 12px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        font-size: 12px;
    }
    @media screen and (max-width: 766px) {
        font-size: 8px;
    }
`

export const Status = styled.div<{ $process: boolean }>`
    width: 94px;
    height: 29px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({$process})=> $process ? '#5D20D6' : '#28D764'};
    border: 1px solid ${({$process})=> $process ? '#5D20D6' : '#28D764'};
    @media screen and (max-width: 766px) {
        width: 50px;
        height: 80%;
        font-size: 8px;
        border-radius: 2px;
    }
`

export const OrderLink = styled(Link)`
    width: 10px;
    height: 10px;
    margin-top: auto;
    background-image: url(${require('./Vector.png')});
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (max-width: 766px) {
        width: 5px;
        height: 8px;
        background-size: 5px 8px;
        margin: 5px;
    }
`