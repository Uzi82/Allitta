import styled from "styled-components";
import { FormStyles, FormLinkStyles, MarginBottom } from "../models/types";

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


