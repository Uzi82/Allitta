import React from "react"
import styled from "styled-components"

const SearchStyled = styled.div`
    display: flex;
    width: 100%;
    max-width: 544px;
    flex-direction: row;
    align-items: center;

    justify-content: flex-end;
`

const Input = styled.input`
    padding: 3px 100px 3px 20px;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(20px);
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    padding: 14px 20px;
    &::placeholder {
        color: #FFF;
    }
    @media screen and (max-width: 1120px) {
        font-size: 16px;
        padding: 12px 18px;
    }
    @media screen and (max-width: 767px) {
        font-size: 14px;
        padding: 10px 16px;
    }
`

const Send = styled.button`
    border-radius: 100px;
    background: #5D20D6;   
    position: absolute;
    transform: translateX(-5px);
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    cursor: pointer;
    border: 2px solid #5D20D6;
    transition-duration: 300ms;
    padding: 9px 20px;
    &:hover {
        background: none;
        border: 2px solid #5D20D6;
        color: #5D20D6;
    }
    @media screen and (max-width: 1120px) {
        font-size: 12px;
        padding: 7px 18px;
    }
    @media screen and (max-width: 767px) {
        padding: 7px 16px;
    }
`



export const Search: React.FC = ({ }) => {
    const [searchValue, setSearchValue] = React.useState('')

    return (
        <SearchStyled>
            <Input onChange={(e) => { setSearchValue(e.target.value) }} value={searchValue} placeholder={'Search Here Shop or Product'} maxLength={30} />
            <Send onClick={() => { }}>Search</Send>
        </SearchStyled>
    )
}