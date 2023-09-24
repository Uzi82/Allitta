import styled from "styled-components";

export const DbNavBtn = styled.button<{ $active: boolean }>`
    width: 210px;
    height: 45px;
    border-radius: 10px;
    background: ${({$active})=> $active ? `#F2EEEA` : `none` };
`