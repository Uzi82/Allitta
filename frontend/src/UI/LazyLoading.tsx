import styled from "styled-components";

export const LazyLoad = styled.div<{$width: string, $height: string}>`
    animation: linear bg-pan-left 8s both infinite;
    width: ${({$width})=> $width || `auto`};
    height: ${({$height})=> $height || `auto`};
    background: #d8d8d8;
    background-image: linear-gradient(90deg, rgb(232, 232, 232), rgb(204, 204, 204), rgb(232, 232, 232));
    border-radius: 10px;
    @keyframes bg-pan-left {
        0% {
            background-position: calc(${({$width})=> $width || `auto`}/-2) 0;
        }
        50% {
            background-position: calc(${({$width})=> $width || `auto`}) 0;
        }
        100% {
            background-position: calc(${({$width})=> $width || `auto`}/-2) 0;
        }
    }
    @media screen and (max-width: 1120px) {
        width: 99vw;
    }
`