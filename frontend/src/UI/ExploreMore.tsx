import React from 'react'
import { Link, Path } from 'react-router-dom'
import styled from 'styled-components'

interface ExploreMoreProps {
    to: string | Partial<Path>,
    $mb?: string
}

export const ExploreMoreWrapper = styled(Link) <{ $mb?: string }>`
    display: flex;
    align-items: center;
    gap:5px;
    color: #5D20D6;
    width: fit-content;
    margin: 0 auto ${({ $mb }) => $mb || '0px'} auto;
    font-family: Inter-regular,sans-serif;
    justify-content: center;
    transition: color 0.3s ease-in-out;
    svg {
        transition: fill 0.3s ease-in-out;
        fill: #5D20D6;
    }
    &:hover {
        color: black;
        svg {
            fill: black;
        }
    }
`

export const ExploreMore: React.FC<ExploreMoreProps> = ({ to, $mb }) => {
    return (
        <ExploreMoreWrapper to={to} $mb={$mb}>
            ExploreMore
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M14.7254 8.16298L11.4038 11.4846C11.2207 11.6677 10.9808 11.7592 10.7409 11.7592C10.5009 11.7592 10.261 11.6677 10.0779 11.4846C9.71185 11.1185 9.71185 10.5249 10.0779 10.1588L11.7992 8.43758H0.9375C0.419736 8.43758 0 8.01784 0 7.50008C0 6.98232 0.419736 6.56258 0.9375 6.56258H11.7992L10.0779 4.84139C9.71185 4.47527 9.71185 3.88168 10.0779 3.51556C10.4441 3.14944 11.0377 3.14944 11.4038 3.51556L14.7254 6.83718C15.0915 7.20327 15.0915 7.79689 14.7254 8.16298Z" />
            </svg>
        </ExploreMoreWrapper>
    )
}