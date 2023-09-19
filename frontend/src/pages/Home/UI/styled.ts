import styled from 'styled-components'
const searchBg = require('./bgSearch.png')

export const Content = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 25px 0;
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: 100vw;
    }
`

export const Search = styled.div`
    background-image: url(${searchBg});
    width: 1108px;
    height: 450px;
    border-radius: 8px;
    display: flex;
    align-items: center;
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

export const SearchText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 94px;
    @media screen and (max-width: 766px) {
        margin-left: 5px;
    }
`

export const SearchHead = styled.h1`
    color: #000;
    width: 388px;
    font-family: Inter-Regular, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 766px) {
        width: calc(100vw - 40px);
        font-size: 16px;
        text-align: center;
    }
`

export const Purple = styled.span`
    color: #5D20D6;
`