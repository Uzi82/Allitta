import styled from "styled-components";

const Btn = styled.button<{width: number; height: number; margint: number; marginb: number; borderRadius: string}>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: #5D20D6;
    border-radius: ${({borderRadius})=>borderRadius};
    border: 2px solid #5D20D6;
    margin: ${props => props.margint}px 0 ${props => props.marginb}px 0;
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
  width?: number,
  height?: number,
  mt?: number,
  mb?: number,
  br?: string
}

export const Button = ({ children, width = 116, height = 35, mt = 0, mb = 0, br = '100px'}: Props) => {
    return(
        <Btn width={width} height={height} margint={mt} marginb={mb} borderRadius={br}>
            { children }
        </Btn>
    )
}