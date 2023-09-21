import styled from "styled-components";
import { Logo } from "./Logo";
// <--- styled ---> // 
const BackgroundBlurStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.70);
    backdrop-filter: blur(30px); 
`
const Content = styled.div`
    position: absolute;
    z-index: 5;
    color: black;
    top: 30%;
    left:50%;
    transform: translateX(-50%);
`
const LogoWrapper = styled.div`
    position: absolute;
    z-index: 5;
    top:40px;
    left: 50%;
    transform: translateX(-50%);
`
const StyledCircleSvg = styled.svg<SvgCircleProps>`
    width: ${props => props.width}px; 
    height: ${props => props.height}px; 
    fill:none;
    position: absolute;
    z-index: 3;
    left:${props => props.$left};
    top:${props => props.$top};
    g {
        circle {
            cx: ${props => props.width * .85};
            cy: ${props => props.height * .85};
            r: ${props => props.width * .5};
        }
    }
`
const StyledCloseSvg = styled.svg`
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
            {close ? <SvgClose /> : ''}
            {logo ? <LogoWrapper><Logo>ALLITO</Logo></LogoWrapper> : ''}
            <Content>
                {children}
            </Content>
            {circles ?
                <>
                    <SvgBluredCircle $left='19%' $top='3%' width={455} height={455} ></SvgBluredCircle>
                    <SvgBluredCircle $left='51%' $top='-11%' width={647} height={647} ></SvgBluredCircle>
                    <SvgBluredCircle $left='14%' $top='62%' width={422} height={422} ></SvgBluredCircle>
                    <SvgBluredCircle $left='63%' $top='65%' width={531} height={531} ></SvgBluredCircle>
                </> : ''}
        </BackgroundBlurStyled>
    )
}


const SvgBluredCircle: React.FC<SvgCircleProps> = (props) => {
    return (
        <StyledCircleSvg {...props} viewBox='0 0 1000 1000' >
            <g filter="url(#filter0_f_211_4)">
                <circle fill="#FF9C00" fillOpacity="0.3" />
            </g>
            <defs>
                <filter id="filter0_f_211_4" x="0" y="-50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_211_4" />
                </filter>
            </defs>
        </StyledCircleSvg>
    )
}
const SvgClose = () => {
    return (
        <StyledCloseSvg viewBox="0 0 25 25">
            <path d="M1.79359 23.207C1.86615 23.2796 1.95231 23.3372 2.04715 23.3766C2.14199 23.4159 2.24365 23.4361 2.34632 23.4361C2.44899 23.4361 2.55065 23.4159 2.64549 23.3766C2.74034 23.3372 2.8265 23.2796 2.89906 23.207L12.5006 13.6054L22.1061 23.207C22.2527 23.3536 22.4515 23.4359 22.6588 23.4359C22.8661 23.4359 23.065 23.3536 23.2116 23.207C23.3582 23.0604 23.4405 22.8616 23.4405 22.6542C23.4405 22.4469 23.3582 22.2481 23.2116 22.1015L13.6061 12.4999L23.2077 2.89448C23.3542 2.74788 23.4366 2.54906 23.4366 2.34174C23.4366 2.13443 23.3542 1.9356 23.2077 1.78901C23.0611 1.64241 22.8622 1.56006 22.6549 1.56006C22.4476 1.56006 22.2488 1.64241 22.1022 1.78901L12.5006 11.3945L2.89515 1.79291C2.7457 1.66493 2.55345 1.59805 2.35683 1.60564C2.16021 1.61324 1.97369 1.69474 1.83455 1.83388C1.69542 1.97302 1.61391 2.15953 1.60631 2.35615C1.59872 2.55278 1.6656 2.74502 1.79359 2.89448L11.3952 12.4999L1.79359 22.1054C1.64808 22.2518 1.56641 22.4498 1.56641 22.6562C1.56641 22.8626 1.64808 23.0606 1.79359 23.207Z" />
        </StyledCloseSvg>
    )
}

