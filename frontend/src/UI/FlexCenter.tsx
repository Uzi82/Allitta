import styled from 'styled-components'

export const FlexCenter = styled.div<{ $scroll?: boolean }>`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${({ $scroll }) => !$scroll && 'max-height: 100vh'};
`