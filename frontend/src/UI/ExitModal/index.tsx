import styled from "styled-components"

export const Exit = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 999999999999;
    background-image: url(${require('./close.png')});
    background-color: inherit;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`