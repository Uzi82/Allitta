import styled from "styled-components";

export const Button = styled.button<{ width?: string; height?: string; mt?: string; mb?: string; br?: string }>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '45px'};
    background-color: #5D20D6;
    border-radius: ${({ br }) => br || '100px'};
    border: 2px solid #5D20D6;
    margin: ${props => props.mt || 0} 0 ${props => props.mb || 0} 0;
    color: #FFF;
    text-align: center;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 2px;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
        background: none;
        color: #5D20D6;
    }
`