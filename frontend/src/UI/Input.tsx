import styled from "styled-components";

type Props = {
    children?: string | JSX.Element | JSX.Element[],
    placeholder?: string,
    type?: string,
    width?: string,
    height?: string,
    maxwidth?: string,
    mb?: string
}
type StylesProps = {
    width?: string,
    $maxwidth?: string,
    height?: string,
    $mb?: string
}
const InputStyled = styled.input<StylesProps>`
    width: ${props => props.width || '100%'};
    margin: 0 0 ${props => props.$mb || '0'} 0;
    box-sizing: border-box;
    padding: 14px;
    border: 1px solid #A1A1A1;
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: #000;
    font-family: Inter-Regular;
    font-size: 14px;
    &::placeholder {
        text-transform: capitalize;
        color: #BEBEBE;
    }
`

const Input = ({ placeholder, type, width, maxwidth, mb }: Props) => {
    return (
        <InputStyled type={type} placeholder={placeholder} {...{ width, $maxwidth: maxwidth, $mb: mb }} />
    )       // все что относится к стилям передал в скобках обьектом, все что непосредственно к инпуту передал напрямую                          
}           // но можно передать все одним обьектом, и так будет короче, но так как сейчас понятнее что к стилям инпута, а что к самому инпуту

export { Input }