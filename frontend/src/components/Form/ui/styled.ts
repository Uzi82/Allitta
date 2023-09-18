import styled from "styled-components";
import { FormStyles, LinkFormStyles, SubtitleStyles, TitleStyles } from "../models/types";

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
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
`
export const Subtitle = styled.p<SubtitleStyles>`
    margin: 0 0 ${props => props.$mb || '0'} 0;
    color: #000;
    font-family: Inter;
    font-weight: 400;

`
export const LinkForm = styled.div<LinkFormStyles>`
    margin-bottom: ${props => props.$mb || 0};
    justify-content: ${props => props.$justify || 'center'};
    width: 100%;
    display: flex;
    color: #5D20D6;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    transition: opacity .2s ease-out;
    a {
        text-decoration: none;
    }
    &:hover {
        opacity: .5;    // позже норм хавер поведение
    }
`


