import styled from 'styled-components'

const LogoContainer = styled.h1<{ color: string }>`
    font-family: Inter-Bold, sans-serif;
    color: #000;
    font-size: 34px;
    color: ${props => props.color};
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 24px;
    }
    @media screen and (max-width: 766px) {
        font-size: 16px;
    }
`

type Props = {
    children: string | JSX.Element | JSX.Element[],
    color?: string
}

export const Logo = ({ children, color = 'black' }: Props) => {
    return(
        <LogoContainer color={color}>{children}</LogoContainer>
    )
}