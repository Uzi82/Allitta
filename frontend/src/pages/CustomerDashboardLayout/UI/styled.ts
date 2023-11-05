import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        flex-direction: column;
        justify-content: flex-start;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const SideBlock = styled.div`
    width: 250px;
    background-color: #4B4B4B;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100vw;
        height: 50px;
    }
    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 75px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 35px 44px 0px 23px;
    width: calc(100vw - 250px);
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100vw;
        height: auto;
        padding: 10px;
    }
    @media screen and (max-width: 768px) {
        width: 100vw;
        height: auto;
        padding: 10px;
    }
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
    width: 100%;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        font-size: 16px;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const OutletContainer = styled.div`
    width: calc(100vw - 250px);
    display: flex;
    min-height: 80vh;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`