import styled from "styled-components";
import { FormWrapperStyles, MarginBottom } from "../";

export const FormWrapper = styled.form<FormWrapperStyles>`
    display: flex;
    ${({ $gap }) => $gap && `gap:${$gap};`}
    flex-direction: column;
    position: relative;
    padding:40px 50px;
    max-width: ${({ $maxWidth }) => `${$maxWidth}` || 'none'};
    align-items: center;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    z-index: 6;
    width: 644px;
    @media screen and (max-width: 920px) {
        padding:30px 40px;
    }
    @media screen and (max-width: 767px) {
        padding: 10px;
        width: 100%;
    }
`

export const Title = styled.h2<MarginBottom>`
    max-width:352px;
    margin: 0 0 ${props => props.$mb || 0} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 36px;
    text-align: center;
    font-size: 32px;
    @media screen and (max-width: 767px) {
        font-size: 24px;
    }
`
export const Subtitle = styled.p<MarginBottom>`
    align-self: start;
    max-width: 320px;
    margin: 0 0 ${props => props.$mb || 0} 0;
    font-family: Inter-Bold;
    color: #000;
    font-size: 18px;
    @media screen and (max-width: 767px) {
        font-size: 15px;
    }
`

export const Flex = styled.div<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Select = styled.select<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
    color: #BFBFBF;
    font-family: Inter-regular;
    font-size: 18px;
    padding: 14px;
    border: 1px solid #A1A1A1;
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    width:100%;
    color: #000;
    font-family: Inter-Regular;
    font-size: 14px;
    &::placeholder {
        text-transform: capitalize;
        color: #BEBEBE;
    }
    &:focus {
        box-shadow: 0px 0px 8px -5px rgba(0,0,0,0.75);
        border: 1px solid rgba(0, 0, 0, 0.8);
    }
    @media screen and (max-width: 980px) {
        padding: 12px;
    }
    @media screen and (max-width: 767px) {
        padding: 10px;
    }
`