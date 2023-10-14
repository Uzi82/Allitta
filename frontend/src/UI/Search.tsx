import styled from "styled-components"

export const Search = styled.input<{ $fullOnMobile?: boolean, $100allways?: boolean }>`
    width: ${({ $100allways }) => $100allways ? `100%` : `335px` };
    height: 40px;
    border-radius: 9px;
    border: 1px solid black;
    background: #FFF;
    color: black;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 20px;
    opacity: 0.5;
    transition-duration: 300ms;
    &:focus {
        border: 1px solid #5D20D6;
        opacity: 1
    }
    @media screen and (max-width: 767px) {
        width: ${({ $fullOnMobile, $100allways }) => $100allways ? `100%` : $fullOnMobile ? `100%` : `45%`};
        font-size: 12px;
        padding: 0 10px;
    }
`