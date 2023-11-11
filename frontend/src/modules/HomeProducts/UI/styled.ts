import styled from 'styled-components'
const searchBg = require('../assets/bgSearch.png')

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;    
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        gap: 10px; 
    }
    @media screen and (max-width: 766px) {
        gap: 10px;
    }
`
export const Content = styled.div`
    display: flex;
    gap: 30px;    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`

export const Main = styled.div`
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
export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 28px;
    width: 100%;
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
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



export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 262px;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        gap: 5px;
    }
    @media screen and (max-width: 766px) {
        gap: 5px;
    }
`
export const ImageBackground = styled.div<{ src: string }>`
    width: 100%;
    background-image: url(${props => props.src});
    max-width: 262px;
    min-height: 1px;
    padding-top: 100%;
    border-radius: 10px;
    background: #D9D9D9;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.h1`
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    word-break: break-all;
    padding: 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 14px; 
        width: calc(20vw - 20px);
    }
`

export const Price = styled.p`
    font-family: Inter-Bold, sans-serif;
    padding: 0 2px;
    margin: 5px 0;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px; 
    }
`

export const Desctiption = styled.p`
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    word-break: break-all;
    padding: 0 2px;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 12px;
        margin: 0;
    }
`
