import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
`

export const SideBlock = styled.div`
    width: 250px;
    /* height: 100%; */
    background-color: rgba(93,32,214, 0.2);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 35px 44px 0px 23px;
    width: calc(100vw - 250px);
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const OutletContainer = styled.div`
    width: calc(100vw - 250px);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`