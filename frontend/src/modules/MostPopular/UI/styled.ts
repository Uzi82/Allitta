import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1108px;
    gap: 30px;    
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(100vw - 20px);
        gap: 10px; 
    }
`

export const Header = styled.h1`
    padding-left: 5px;
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
`

export const List = styled.div`
    display: flex;
    width: 1108px;
    min-height: 150px;
    flex-direction: row;
    gap: 17px;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: calc(100vw - 20px);
        gap: 10px; 
        justify-content: space-around;
    }
`