import styled from 'styled-components'

export const CardImg = styled.img`
    width: 265px;
    height: 265px;
    border-radius: 10px;
    background: #D9D9D9;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(20vw - 20px);
        height: calc(20vw - 20px);
    }
`