import styled from "styled-components"

export const HeaderDiv = styled.div`
    border: 1px solid #D9D9D9;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(20px);
    width: 100vw;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderContent = styled.div`
    width: 1108px;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 57px;
`

export const LinkText = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    transition-duration: 300ms;
    &:hover {
        color: #5D20D6;
        font-size: 15px;
    }
`

export const Sign = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
    align-items: center;
`