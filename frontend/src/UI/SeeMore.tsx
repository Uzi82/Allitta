import React from 'react'
import styled from 'styled-components'

export const SeeMoreStyled = styled.img`
    cursor: pointer;
    padding: 3px;
    transition: transform 0.25s ease-out;
`
const SeeMore: React.FC = () => {
    return (
        <SeeMoreStyled src='/svg/seemore.svg' />
    )
}

export { SeeMore }