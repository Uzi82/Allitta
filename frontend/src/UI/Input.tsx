import styled from "styled-components";

type StylesProps = {
    width?: string,
    $maxwidth?: string,
    height?: string,
    $mb?: string
}
export const Input = styled.input<StylesProps>`
    width: ${props => props.width || '100%'};
    margin: 0 0 ${props => props.$mb || '0'} 0;
    padding: 14px;
    border: 1px solid #A1A1A1;
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
`