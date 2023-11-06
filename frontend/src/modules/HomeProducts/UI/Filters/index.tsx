import React from "react"
import { Wrapper, Header, Title, ButtonReset, Divider } from "./Filters.styled"
import { RadioGroup } from "./components/RadioGroup"
import { Price } from "./components/Price"

export const Filters: React.FC = ({ }) => {
    const [price, setPrice] = React.useState(0)
    console.log(price)
    return (
        <Wrapper>
            <Header>
                <Title>Filter</Title>
                <ButtonReset>Reset</ButtonReset>
            </Header>
            <Divider $mb={'10px'} />
            <Price setPrice={setPrice} />
            <Divider $mb={'20px'} />
            <RadioGroup label='Categories' />
        </Wrapper>
    )
}