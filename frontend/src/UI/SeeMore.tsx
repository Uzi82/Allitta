import React from 'react'
import styled from 'styled-components'

export const SeeMoreStyled = styled.img`
    grid-area: 1 / 12 / 2 / 13;
    cursor: pointer;
    padding: 3px;
    margin-left: auto;
    transition: transform 0.25s ease-out;
    &:hover {
        transform: rotate(90deg);
    }
`
const SeeMore: React.FC = () => {
    return (
        <SeeMoreStyled src='/svg/seemore.svg' />
    )
}

export { SeeMore }