import styled from "styled-components";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
// <--- styled ---> // 
const BackgroundBlurStyled = styled.div<BackgroungBlurStyles>`
    display: ${props => props.$isShown ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    width: 100vw;
    min-height: 100vh;
    backdrop-filter: blur(10px);
    animation-name: appear;
    animation-duration:500ms;
    padding: 10px;
    @keyframes appear {
        0%{
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }
`
const LogoWrapper = styled(Link)`
    position: absolute;
    z-index: 5;
    top:40px;
    left: 50%;
    transform: translateX(-50%);
`
const StyledCircleSvg = styled.img<SvgCircleProps>`
    width: ${props => props.width}; 
    height: ${props => props.height}; 
    fill:none;
    position: absolute;
    z-index: 3;
    left:${props => props.$left};
    top:${props => props.$top};
    background: rgba(93, 32, 214, 0.3);
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
    $isShown?: boolean
}
type SvgCircleProps = {
    width: string;
    height: string;
    $left: string,
    $top: string,
}
type BackgroungBlurStyles = {
    $isShown?: boolean
}
// </--- types ---/> // 
export const BackgroundBlur: React.FC<Props> = ({ children, circles, close, logo, $isShown }) => {
    return (
        <BackgroundBlurStyled $isShown={$isShown} >
            {close ? <Link to='/'><StyledCloseSvg src="/svg/closeButton.svg" /></Link> : ''}
            {logo ? <LogoWrapper to='/'><Logo>ALLITTA</Logo></LogoWrapper> : ''}
            {children}
            {circles ?
                <>
                    <StyledCircleSvg $left='19%' $top='3%' width={'24%'} height={'24%'} src="/svg/circle.svg" alt="circle" />
                    <StyledCircleSvg $left='51%' $top='-11%' width={'38%'} height={'38%'} src="/svg/circle.svg" alt="circle" />
                    <StyledCircleSvg $left='14%' $top='62%' width={'22%'} height={'22%'} src="/svg/circle.svg" alt="circle" />
                    <StyledCircleSvg $left='63%' $top='65%' width={'27%'} height={'27%'} src="/svg/circle.svg" alt="circle" />
                </> : ''}
        </BackgroundBlurStyled>
    )
}