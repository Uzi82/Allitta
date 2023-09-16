import styled from "styled-components";
import { StylesProps } from "../models/types";

export const InputStyled = styled.input<StylesProps>`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.$maxwidth || '388px'};
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    border: 1px solid #A1A1A1;
    border-radius: 10px;
    margin: ${props => props.$mt || '0'} 0 0 0;
    color: #000;
    font-weight: 500;
    padding: 14px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    &::placeholder {
        color: #BEBEBE;
        text-transform: capitalize;
    }
`

