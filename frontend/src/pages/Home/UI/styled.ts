import styled from 'styled-components'
const searchBg = require('./bgSearch.png')

export const Content = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 25px 0;
`

export const Search = styled.div`
    background-image: url(${searchBg});
    width: 1108px;
    height: 450px;
    border-radius: 8px;
    display: flex;
    align-items: center;
`

export const SearchText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 94px;
`

export const SearchHead = styled.h1`
    color: #000;
    width: 388px;
    font-family: Inter-Regular, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Purple = styled.span`
    color: #5D20D6;
`