import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const HeaderWrapper = styled.div`
    margin:20px 0 0 auto;
    display: flex;
    gap: 20px;
    @media (max-width: 480px) {
        flex-direction: column;
        margin: 20px 0 0 0;
        width: 100%;
        align-items: center;
    }
`

