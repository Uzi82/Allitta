import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 50px;
    @media screen and (max-width: 767px) {
        padding: 20px;
    }
`

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 0.5px solid #848484;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        position: relative;
        flex-direction: column;
        gap: 5px;
    }
`

export const InfoEl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media screen and (max-width: 1023px) {
        gap: 3px;
    }
`

export const InfoTitle = styled.h1`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1023px) {
        font-size: 14px;
    }
`

export const InfoText = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 285px;
    @media screen and (max-width: 1023px) {
        font-size: 10px;
    }
`

export const InfoName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 1023px) {
        font-size: 12px;
    }
`

export const Exit = styled.button`
    width: 25px;
    height: 25px;
    background-image: url(${require('./close.png')});
    background-color: inherit;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    @media screen and (max-width: 767px) {
        position: absolute;
        right: 0;
        top: 0;
    }
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media screen and (max-width: 1023px) {
        gap: 3px;
    }
`

export const MessageTitle = styled.h1`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1023px) {
        font-size: 14px;
    }
`

export const MessageText = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 912px;
    @media screen and (max-width: 1023px) {
        font-size: 12px;
    }
`

export const Products = styled.div`
    border-radius: 15px;
    background: #F4F4F4;
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.10) inset;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1023px) {
        padding: 5px;
    }
`

export const List = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-height: 50vh;
    gap: 10px;
    width: calc(100% - 40px);
    overflow-y: scroll;
    background-color: inherit;
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
    @media screen and (max-width: 1023px) {
        width: calc(100% - 10px);
    }
`

export const Product = styled.div`
    min-height: 150px;
    width: calc(100% - 10px);
    border-radius: 15px;
    background: #FFF;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);
    display: grid;
    grid-template-columns: 15% 35% 10% 20% 20%;
    align-items: center;
    padding: 20px;
    @media screen and (max-width: 1023px) {
        grid-template-columns: 20% 30% 10% 20% 20%;
    }
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
        min-height: fit-content;
    }
`

export const ProductImg = styled.div<{ $img?: FileList | null }>`
    width: 110px;
    height: 110px;
    background: ${({ $img }) => $img ? `url(${$img})` : `#D9D9D9`};
    border-radius: 10px;
`

export const ProductName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 320px;
    align-self: flex-start;
    padding-top: 10px;
    @media screen and (max-width: 767px) {
        text-align: center;
        align-self: center;
    }
`

export const ProductEl = styled.div<{ $right?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ $right }) => $right ? "flex-end" : 'center' };
    gap: 10px;
    @media screen and (max-width: 767px) {
        align-items: center;
    }
`

export const ElTitle = styled.h1`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition-duration: 300ms;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
`

export const ElValue = styled.p`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Status = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        gap: 5px;
    }
`

export const ReadyBtn = styled.button`
    cursor: pointer;
    width: 20%;
    color: #FFF;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 10px;
    height: 45px;
    border: 2px solid #5D20D6;
    background: #5D20D6;
    transition-duration: 300ms;
    &:hover {
        background: none;
        color: #5D20D6;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        height: 40px;
    }
`

export const ReadyPrice = styled.div`
    display: flex;
    width: 30%;
    justify-content: stretch;
    gap: 10px;
    @media screen and (max-width: 767px) {
        width: 100%;
        height: 40px;
    }
`

export const ReadyCurrency = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-self: center;
    @media screen and (max-width: 767px) {
        width: 15%;
    }
`

export const ReadyInput = styled.input`
    fill: rgba(255, 255, 255, 0.80);
    border: 1px solid black;
    backdrop-filter: blur(10px);
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    border-radius: 10px;
    padding: 0 10px;
    &:focus {
        opacity: 1;
        border-color: #5D20D6; 
    }
    @media screen and (max-width: 767px) {
        width: 85%;
        height: 40px;
    }
`

export const Bill = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const BillNum = styled.span`
    color: #5D20D6;
    font-family: Inter-Regular, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const StatusTitle = styled.h1<{ $color: string }>`
    color: ${({ $color }) => $color};
    text-align: right;
    font-family: Inter-Regular, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`