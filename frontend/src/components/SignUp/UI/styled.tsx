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
    font-size: 14px;color: ;
    font-weight: 500;
    padding:14px 22px;
    transition: .2s ease color;
    &:hover {
        color: #FF9C00;
    }
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
    align-self: start;
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
export const Upload = styled.div<MarginBottom>`
    margin: 0 0 ${props => props.$mb || 0} 0;
    display: flex;
    flex-direction: column;
    width: 315px;
    height: 315px;
    color: #BFBFBF;
    text-align: center;
    font-family: Inter-regular;
    font-size: 18px;
    border-radius: 315px;
    border: 2px dashed #000;
    background: #FFF;
    align-items: center;
    padding: 105px 50px;
    cursor: pointer;
`




