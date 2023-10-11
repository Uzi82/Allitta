import styled from "styled-components"

export const ListLinkBtn = styled.button`
    width: 10px;
    height: 10px;
    cursor: pointer;
    background-color: white;
    background-image: url(${require('./arrow.png')});
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 860px) {
       position: absolute;
       width: 100%;
       height: 100%;
       background-image: none;
       background: none;
       left: 0;
       top: 0;
    }
`