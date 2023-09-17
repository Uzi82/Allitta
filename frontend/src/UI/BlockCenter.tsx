import styled from 'styled-components'

export const BlockCenter = styled.div<{align?: string, background?: string}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    ${(props) => props.align && `align-items: ${props.align};`}
    ${(props) => props.background && `background: ${props.background};`}
`