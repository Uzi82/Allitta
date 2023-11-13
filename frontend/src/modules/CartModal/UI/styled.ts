import styled from "styled-components";

export const Content = styled.div<{ $start: boolean }>`
    position: fixed;
    z-index: 9999;
    width: 626px;
    height: 100vh;
    top: 0;
    right: -100%;
    border-radius: 30px 0px 0px 30px;
    background: #FFF;
    box-shadow: 1px 1px 30px 0px rgba(0, 0, 0, 0.25);
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    &.opened {
        right: 0;
    }
    &.closed {
        right: -100%;
    }
    &.opening {
        animation-name: cartModal;  
        animation-direction: normal;
        right: 0;
    }
    &.closing {
        animation-name: cartModal;  
        animation-direction: reverse;
        right: -100%;
    }
    @keyframes cartModal {
        0% {
            right: -100%;
        }
        100% {
            right: 0
        }
    }
    @media screen and (max-width: 626px) {
        width: 100%;
    }
`

export const ExitBtn = styled.button`
    position: absolute;
    z-index: 99999;
    right: 40px;
    top: 40px;
    width: 25px;
    height: 25px;
    background: url(${require('./close.png')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: inherit;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
        transform: rotate(90deg);
    }
    @media screen and (max-width: 626px) {
        right: 10px;
        top: 10px;
    }
`