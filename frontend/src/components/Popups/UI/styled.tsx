import styled from "styled-components";
import { MarginBottom } from "../models/types";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 444px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    padding:40px 50px;
    justify-content: center;
    align-items: center;
    max-width: 456px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const Title = styled.h2<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
    color: #000;
    max-width:352px;
    font-family: Inter-bold;
    font-size: 36px;
    text-align: center;
    font-size: 32px;
`
export const Subtitle = styled.p<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
    max-width: 320px;
    font-family: Inter-Bold;
    color: #000;
    text-align: center;
    font-size: 14px;
`
export const Img = styled.img<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
`
export const Button = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5D20D6;
    border: 2px solid #5D20D6;
    color: #FFF;
    border-radius: 10px;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: background .2s ease-in-out, border .2s ease-in-out,color .2s ease-in-out;
    &:hover {
        background: transparent;
        border: 2px solid #5D20D6;
        color: #5D20D6
    }
`