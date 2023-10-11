import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    position:relative;
    overflow: hidden;
`

export const LeftContent = styled.div`
    flex: 1 0 48%;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 96px;
    padding: 90px 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.80); 
    background: rgba(255, 255, 255, 0.95);
    mix-blend-mode: screen;
    backdrop-filter: blur(2px);
    @media (max-width: 767px) {
        flex: 1 1 auto;
    }
`
export const RightContent = styled.div`
    flex: 1 1 55%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 130px 24px;
    background:linear-gradient(90deg, rgba(93,32,214,1) 1%, rgba(64,34,122,0.95) 100%);
    @media (max-width: 1200px) {
        flex: 1 1 45%;
    }
    @media (max-width: 992px) {
        flex: 1 1 30%;
        display: flex;
    }
    @media (max-width: 767px) {
        display: none;
    }
    
`
export const Authorization = styled.div`
    flex: 1 1 55%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`
export const Text = styled.p`
    color: #FFF;
    font-family: Inter-bold;
    font-size: 24px;
    max-width:564px;
    @media (max-width: 767px) {
        font-size: 16px;
    }
`
export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9; 
    @media (max-width: 1200px) {
        display: none;
    }
`
export const Logo = styled.h1`
    font-family: Inter-Bold, sans-serif;
    color: #000;
    font-size: 34px;
    color: black;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 32px;
    }
    @media screen and (max-width: 766px) {
        font-size: 28px;
    }
`


