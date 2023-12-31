import styled from "styled-components";

type StylesProps = {
    width?: string,
    $maxwidth?: string,
    height?: string,
    $mb?: string
    error?: string
}
export const Input = styled.input<StylesProps>`
    width: ${props => props.width || '100%'};
    margin: 0 0 ${props => props.$mb || '0'} 0;
    padding: 14px;
    border: ${props => props.error ? 'rgba(168, 11, 11, 0.5)' : '#A1A1A1'} 1px solid;
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: #000;
    font-family: Inter-Regular;
    font-size: 14px;
    transition: .3s ease border,.3s ease box-shadow;
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