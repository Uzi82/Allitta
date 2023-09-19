import styled from "styled-components";

const Btn = styled.button<{ width?: string; height?: string; margint?: string; marginb?: string; borderRadius?: string }>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: #5D20D6;
    border-radius: ${({ borderRadius }) => borderRadius};
    border: 2px solid #5D20D6;
    margin: ${props => props.margint} 0 ${props => props.marginb} 0;
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

type Props = {
    children: string | JSX.Element | JSX.Element[],
    width?: string,
    height?: string,
    mt?: string,
    mb?: string,
    br?: string
}

export const Button = ({ children, width, height, mt, mb, br = '100px' }: Props) => {
    return (
        <Btn width={width} height={height} margint={mt} marginb={mb} borderRadius={br}>
            {children}
        </Btn>
    )
}