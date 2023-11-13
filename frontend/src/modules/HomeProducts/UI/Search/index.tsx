import React from "react"
import { Input, SearchStyled, Send } from "./Search.styles"

export const Search: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState('')

    return (
        <SearchStyled>
            <Input onChange={(e) => { setSearchValue(e.target.value) }} value={searchValue} placeholder={'Search Here Shop or Product'} maxLength={30} />
            <Send onClick={() => { }}>Search</Send>
        </SearchStyled>
    )
}