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
    padding: 0 20px;
    margin: 30px 0 10px 0;
    grid-column-gap: 10px;
    grid-template-columns: 110px 220px 160px 20px 80px 200px auto 10px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 100%;
        grid-template-columns: 68.75px 137.5px 100px 12.5px 50px 125px auto 10px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
        grid-template-columns: 68.75px 137.5px 100px 12.5px 50px 125px auto 10px;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        margin: 20px 0 5px 0;
        grid-column-gap: 5px;
        grid-template-columns: 10% 15% 15% 3% 10% 20% 15% 5%;
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

export const Product = styled.div`
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
    grid-template-columns: 110px 220px 160px 20px 80px 200px auto 10px;
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 100%;
        grid-template-columns: 68.75px 137.5px 100px 12.5px 50px 125px auto 10px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
        grid-template-columns: 68.75px 137.5px 100px 12.5px 50px 125px auto 10px;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        grid-column-gap: 5px;
        grid-template-columns: 10% 15% 15% 3% 10% 20% 15% 5%;
        padding: 5px 5px;
        height: 30px;
    }
`

export const ProductEl = styled.div`
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

export const ProductBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductBtn = styled.div`
    width: 10px;
    height: 10px;
    cursor: pointer;
    margin: auto 0;
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

export const ToolTip = styled.div<{ $active: boolean }>`
    display: ${({ $active }) => $active ? 'flex' : 'none'};
    width: 123px;
    height: 86px;
    position: absolute;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    border-radius: 8px;
    background: white;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
    transform: translateX(0) translateY(62px);
    padding: 16px;
    @media screen and (max-width: 1440px) {
        transform: translateX(-60px) translateY(0);
        width: 83px;
        height: 60px;
    }
`

export const ToolTipBtn = styled.button`
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    cursor: pointer;
    text-align: left;
    background: none;
    @media screen and (max-width: 1440px) {
        font-size: 10px;
    }
`

export const Arrow = styled.img`
    width: 40px;
    height: 5px;
    user-select: none;
    position: absolute;
    z-index: 999;
    transform: translateY(-20px);
    @media screen and (max-width: 1440px) {
        display: none;
    }
`