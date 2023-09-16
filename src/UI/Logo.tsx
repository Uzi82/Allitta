import styled from 'styled-components'

const LogoContainer = styled.h1<{ color: string }>`
    font-family: Inter-Bold, sans-serif;
    color: #000;
    font-size: 34px;
    color: ${props => props.color};
`

type Props = {
    children: string | JSX.Element | JSX.Element[],
    color?: string
}

const Logo = ({ children, color = 'black' }: Props) => {
    return(
        <LogoContainer color={color}>{children}</LogoContainer>
    )
}

export default Logo