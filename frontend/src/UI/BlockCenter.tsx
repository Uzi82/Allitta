import styled from 'styled-components'

export const BlockCenter = styled.div<{$align?: string, $background?: string, $padding?: string}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    ${({$align}) => $align && `align-items: ${$align};`}
    ${({$background}) => $background && `background: ${$background};`}
    ${({$padding}) => $padding && `padding: ${$padding};`}
`