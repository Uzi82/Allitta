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
`

export const HeadEl = styled.div<{ $margin: string }>`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    opacity: 0.6;
    /* margin: ${({ $margin }) => `${$margin}`}; */
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
`

export const HeadTitle = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Order = styled.div`
    display: grid;
    align-items: center;
    width: 1110px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    width: 1110px;
    height: 50px;
    padding: 15px 20px;
    grid-column-gap: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    grid-template-columns: 110px 280px 110px 115px 230px auto 10px;
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
`

export const OrderLink = styled(Link)`
    width: 10px;
    height: 10px;
    margin-top: auto;
    background-image: url(${require('./Vector.png')});
    background-position: center;
    background-repeat: no-repeat;
`