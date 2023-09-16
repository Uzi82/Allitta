import styled from "styled-components";
import { LinkFormStyles, StylesProps } from "../models/types";

export const Form = styled.form`
    width: 100%;
    max-width: 600px;
    display:flex;
    justify-content:center
`
export const Title = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
`
export const Subtitle = styled.p`
    color: #000;
    font-family: Inter;
    font-weight: 400;
`
export const LinkForm = styled.div<LinkFormStyles>`
    color: #5D20D6;
    margin-left: ${props => props.ml || 0};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    transition: opacity .2s ease-out;
    &:hover {
        opacity: .5;    // позже норм хавер
    }
`


