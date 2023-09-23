import styled from "styled-components";
import { CreateLinkStyles, MarginBottom } from "../models/types";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding:40px 50px;
    align-items: center;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
`
export const CreateLinks = styled.div<MarginBottom>`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    max-width:356px;
    border-radius: 12px;
    margin: 0 0 ${props => props.$mb || 0} 0;
    background: rgba(243, 243, 243, 0.60);
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(20px);
    padding:5px;
`
export const CreateLink = styled(Link) <CreateLinkStyles>`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: ${props => props.active ? '#fff' : 'transparent'} ;
    color: ${props => props.active ? '#FF9C00' : '#000'} ;
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
`
export const Subtitle = styled.p<MarginBottom>`
    align-self: start;
    max-width: 320px;
    margin: 0 0 ${props => props.$mb || 0} 0;
    font-family: Inter-Bold;
    color: #000;
    font-size: 18px;
`
export const Img = styled.img<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
`
export const Flex = styled.div<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
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
    z-index: 3;
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
    position: relative;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 0 ${props => props.$mb || 0} 0;
    color: #BFBFBF;
    font-family: Inter-regular;
    font-size: 18px;
`




