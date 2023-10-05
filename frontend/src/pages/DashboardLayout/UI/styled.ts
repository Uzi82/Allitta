import styled from "styled-components";

export const Container = styled.div<{ $scroll: boolean | undefined }>`
    width: 100vw;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
    ${({ $scroll }) => $scroll ? 'height: 100vh;' : 'min-height: 100vh;'}
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        flex-direction: column;
        justify-content: flex-start;
    }
    @media screen and (max-width: 766px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const SideBlock = styled.div`
    width: 250px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 35px 44px 0px 23px;
    width: calc(100vw - 250px);
    @media screen and (max-width: 1023px) {
        width: 100vw;
        height: auto;
        padding:  60px 10px 10px 10px;
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
    @media screen and (max-width: 766px) {
        flex-direction: column;
        align-items: center;
        gap: 5px;
        &>div{text-align:center}
    }
`

export const OutletContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TopLine = styled.div`
    width: 100vw;
    height: 50px;
    top: 0;
    left: 0;
    display: none;
    background-color: #FBF9F8;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    @media screen and (max-width: 1023px) {
        display: flex;
        position: absolute;
        z-index: 999999999;
    }
`

export const MenuBtn = styled.button`
    background-image: url(${require('./menuBtn.png')});
    background-position: center;
    background-color: inherit;
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    cursor: pointer;
`