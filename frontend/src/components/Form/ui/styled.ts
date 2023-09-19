import styled from "styled-components";
import { FormStyles, FormLinkStyles, SubtitleStyles, TitleStyles } from "../models/types";

export const FormStyled = styled.form<FormStyles>`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.$maxwidth || '100%'};
    margin-bottom: ${props => props.$mb || '0'};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`
export const Title = styled.h2<TitleStyles>`
    margin: 0 0 ${props => props.$mb || '0'} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 36px;
`
export const Subtitle = styled.p<SubtitleStyles>`
    margin: 0 0 ${props => props.$mb || '0'} 0;
    max-width: 320px;
    text-align: center;
    color: #000;
    font-family: Inter-Regular;
    font-size: 16px;
    font-style: normal;
`
export const FormLink = styled.div<FormLinkStyles>`
    margin-bottom: ${props => props.$mb || 0};
    justify-content: ${props => props.$justify || 'stretch'};
    width: ${props => props.width || 'auto'} ;
    display: flex;
    color: #5D20D6;
    font-family: Inter-Regular;
    font-size: 14px;
    transition: opacity .2s ease-out;
    a {
        text-decoration: none;
    }
    &:hover {
        opacity: .5;    // позже норм хавер поведение
    }
`
export const VerifyingActions = styled.div<FormLinkStyles>`
    margin-bottom: ${props => props.$mb || 0};
    justify-content: space-between;
    align-items:center;
    width: 100%;
    display: flex;
`


