import styled from "styled-components";
import { CreateLinkStyles, FormWrapperStyles, MarginBottom } from "../models/types";

export const FormWrapper = styled.form<FormWrapperStyles>`
    display: flex;
    ${({ $gap }) => $gap && `gap:${$gap};`}
    flex-direction: column;
    padding:40px 50px;
    max-width: ${({ $maxWidth }) => `${$maxWidth}` || 'none'};
    width: 100%;
    align-items: center;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    position: absolute;
    z-index: 6;
    top: 20%;
    left:50%;
    transform: translateX(-50%);
    @media screen and (max-width: 920px) {
        padding:30px 40px;
    }
    @media screen and (max-width: 767px) {
        padding:80px 20px;
        position: static;
        transform: none;
        margin: 0 auto;
    }
`
export const CreateLinkWrapper = styled.div<MarginBottom>`
    display: flex;
    height: 100%;
    align-items: center;
    max-width:356px;
    border-radius: 12px;
    margin: 0 0 ${props => props.$mb || 0} 0;
    background: rgba(243, 243, 243, 0.60);
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(20px);
    padding:5px;
    @media screen and (max-width: 830px) {
        display: block;
        width:100%;
    }
`
export const CreateLink = styled.button<CreateLinkStyles>`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-shrink: 0;
    text-align:center;
    border-radius: 10px;
    cursor: pointer;
    background: ${props => props.$active ? '#fff' : 'transparent'} ;
    color: ${props => props.$active ? '#FF9C00' : '#000'} ;
    font-family: Inter-regular;
    font-size: 14px;
    padding:14px 22px;
    transition: .2s ease color;
    &:hover {
        color: #FF9C00;
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
export const Img = styled.img<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
`
export const Flex = styled.div<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`
export const UploadWrapper = styled.div<MarginBottom>`
    width: 315px;
    height: 315px;
    position: relative;
    margin: 0 0 ${props => props.$mb || 0} 0;
    border-radius: 315px;
    border: 2px dashed #000;
    background: #FFF;
`
export const UploadInput = styled.input<MarginBottom>`
    width: 315px;
    height: 315px;
    position: absolute;
    z-index: 1000;
    margin: 0 0 ${props => props.$mb || 0} 0;
    border-radius: 315px;
    background-color: transparent;
    font-size: 0;
`
export const UploadContent = styled.div<MarginBottom>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    text-align: center;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 0 ${props => props.$mb || 0} 0;
    color: #BFBFBF;
    font-family: Inter-regular;
    font-size: 18px;
`
export const ImgInput = styled.img<MarginBottom>`
    position: absolute;
    z-index: 4;
    margin: 0 0 ${props => props.$mb || 0} 0;
    width: 319px;
    height: 319px;
    border-radius: 319px;
    object-fit: cover;
    top: -3px;
    left: -3px;
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




