import styled from "styled-components";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
// <--- styled ---> // 
const BackgroundBlurStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #fff;
    backdrop-filter: blur(30px); 
`
const Content = styled.div`
    position: absolute;
    z-index: 6;
    color: black;
    top: 20%;
    left:50%;
    transform: translateX(-50%);
`
const LogoWrapper = styled(Link)`
    position: absolute;
    z-index: 5;
    top:40px;
    left: 50%;
    transform: translateX(-50%);
`
const StyledCircleSvg = styled.img<SvgCircleProps>`
    width: ${props => props.width}px; 
    height: ${props => props.height}px; 
    fill:none;
    position: absolute;
    z-index: 3;
    left:${props => props.$left};
    top:${props => props.$top};
    background: rgba(255, 156, 0, 0.20);
    filter: blur(75px);
`
const StyledCloseSvg = styled.img`
    width: 25px; 
    height: 25px; 
    position: absolute;
    z-index: 6;
    left:20px;
    top:20px;
    cursor:pointer;
    fill:black;
    transition: .15s ease-in-out fill;
    &:hover {
        fill: rgba(0, 0, 0, 0.7);
    }
`
// </--- styled ---/> // 
// <--- types ---> // 
type Props = {
    children: string | JSX.Element | JSX.Element[],
    circles?: boolean
    close?: boolean
    logo?: boolean
}
type SvgCircleProps = {
    width: number;
    height: number;
    $left: string,
    $top: string,
}
// </--- types ---/> // 
export const BackgroundBlur: React.FC<Props> = ({ children, circles, close, logo }) => {
    return (
        <BackgroundBlurStyled>
            {close ? <Link to='/'><StyledCloseSvg src="/svg/closeButton.svg" /></Link> : ''}
            {logo ? <LogoWrapper to='/'><Logo>ALLITO</Logo></LogoWrapper> : ''}
            <Content>
                {children}
            </Content>
            {circles ?
                <>
                    <StyledCircleSvg $left='19%' $top='3%' width={455} height={455} src="/svg/circle.svg" alt="circle" />
                    <StyledCircleSvg $left='51%' $top='-11%' width={647} height={647} src="/svg/circle.svg" alt="circle" />
                    <StyledCircleSvg $left='14%' $top='62%' width={422} height={422} src="/svg/circle.svg" alt="circle" />
                    <StyledCircleSvg $left='63%' $top='65%' width={531} height={531} src="/svg/circle.svg" alt="circle" />
                </> : ''}
        </BackgroundBlurStyled>
    )
}