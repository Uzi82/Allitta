import styled from "styled-components";
import { FormStyles, FormLinkStyles, MarginBottom, CreateLinkStyles } from "../models/types";

export const FormStyled = styled.form<FormStyles>`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.$maxwidth || '100%'};
    margin-bottom: ${props => props.$mb || '0'};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`
export const Title = styled.h2<MarginBottom>`
    margin: 0 0 ${props => props.$mb || '0'} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 36px;
    @media (max-width: 1080px) {
        font-size: 32px;
    }
    @media (max-width: 767px) {
        font-size: 24px;
    }
`
export const Subtitle = styled.p<MarginBottom>`
    margin: 0 0 ${props => props.$mb || '0'} 0;
    max-width: 320px;
    text-align: center;
    color: #000;
    font-family: Inter-Regular;
    font-size: 16px;
    @media (max-width: 767px) {
        font-size: 12px;
    }
`
export const FormLink = styled.div<FormLinkStyles>`
    margin-bottom: ${props => props.$mb || 0};
    justify-content: ${props => props.$justify || 'stretch'};
    width: ${props => props.width || 'auto'} ;
    align-self: flex-end;
    cursor: ${({ $disabled }) => $disabled ? 'default' : 'pointer'};
    display: flex;
    color: #5D20D6;
    opacity: ${({ $disabled }) => $disabled ? '.5' : '1'};
    font-family: Inter-Regular;
    font-size: 14px;
    transition: opacity .2s ease-out;
    a {
        text-decoration: none;
    }
    &:hover {
        opacity: .5;
    }
    @media (max-width: 767px) {
        font-size: 12px;
    }
`
export const VerifyingActions = styled.div<MarginBottom>`
    margin-bottom: ${props => props.$mb || 0};
    justify-content: space-between;
    align-items:center;
    width: 100%;
    display: flex;
`
export const Img = styled.img<MarginBottom>`
margin-bottom: ${props => props.$mb || 0};
`
export const CreateLinkWrapper = styled.div<MarginBottom>`
    display: flex;
    align-items: center;
    max-width:356px;
    border-radius: 12px;
    margin: 0 0 ${props => props.$mb || 0} 0;
    background: rgba(243, 243, 243, 0.60);
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(20px);
    padding:5px;
    gap:5px;
    @media screen and (max-width: 830px) {
        flex-direction:column;
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
    @media screen and (max-width: 830px) {
        width:100%;
    }
`

