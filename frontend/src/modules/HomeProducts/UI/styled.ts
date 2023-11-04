import styled from 'styled-components'
const searchBg = require('../assets/bgSearch.png')

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1108px;
    gap: 30px;    
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(100vw - 20px);
        gap: 10px; 
    }
    @media screen and (max-width: 766px) {
        gap: 10px;
        width: calc(100vw - 20px);
    }
`

export const MainPage = styled.div`
    background-image: url(${searchBg});
    width: 1108px;
    height: 450px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(100vw - 20px);
    }
    @media screen and (max-width: 766px) {
        width: calc(100vw - 20px);
        height: 150px;
        background: none;
    }
`
export const MainTitle = styled.h1`
    font-family: Inter-Regular, sans-serif;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
    margin-bottom:5px;
    @media screen and (max-width: 1024px) {
        font-size: 32px;
    }
    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`
export const MainText = styled.div`
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
`