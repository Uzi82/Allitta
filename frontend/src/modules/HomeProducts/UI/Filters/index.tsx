import React from "react"
import { Wrapper, Header, Title, ButtonReset, Divider } from "./Filters.styled"
import { Price } from "./components/Price"
import { setCategories, setCities, setPrice } from "../../../../store/slices/filtersSlice"
import { Categories } from "./components/Categories"
import { Cities } from "./components/Cities"
import { useAppSelector } from "../../../Dashboard"

export const Filters: React.FC = ({ }) => {

    const filters = useAppSelector((state) => state.filtersSlice)

    return (
        <Wrapper>
            <Header>
                <Title>Filter</Title>
                <ButtonReset onClick={() => {
                    setPrice(0)
                    setCategories({})
                    setCities({})
                }}>Reset</ButtonReset>
            </Header>
            <Divider $mb={'10px'} />
            <Price />
            <Divider $mb={'20px'} />
            <Categories />
            <Divider $mb={'20px'} />
            <Cities />
        </Wrapper>
    )
}