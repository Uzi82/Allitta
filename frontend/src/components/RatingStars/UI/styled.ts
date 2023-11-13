import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    gap: 3px;
`

export const Star = styled.div<{ $active: boolean }>`
    width: 25px;
    height: 25px;
    position: relative;   
    background-image: url(${({ $active }) => $active ? require('./star.png') : require('./star 3.png')});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: inherit;
`

export const HalfStar = styled.div`
    position: absolute;
    z-index: 100;
    width: 25px;
    height: 25px;   
    background-image: url(${require('./star 2.png')});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: inherit;
`