import React from "react"
import { Wrapper, Header, Title, ButtonReset, Divider, PriceWrapper, PriceInput, MaxPriceTitle, PriceSelect, RadioGroup, RadioGroupHeader, RadioGroupTitle, RadioGroupExpand, RadioGroupElement } from "./Filters.styled"
import CustomCheckbox from "./CustomCheckbox"

export const Filters: React.FC = ({ }) => {
    const [cheched, setcheched] = React.useState(false)
    return (
        <Wrapper>
            <Header>
                <Title>Filter</Title>
                <ButtonReset>Reset</ButtonReset>
            </Header>
            <Divider />
            <PriceWrapper>
                <PriceInput />
                <MaxPriceTitle></MaxPriceTitle>
                <PriceSelect />
            </PriceWrapper>
            <Divider />
            <RadioGroup>
                <RadioGroupHeader>
                    <RadioGroupTitle>Categories</RadioGroupTitle>
                    <RadioGroupExpand>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                            <path d="M14.9997 1.05857C15.0046 0.852216 14.9404 0.649579 14.8158 0.478826C14.6912 0.308074 14.5125 0.177691 14.3046 0.105804C14.0967 0.0339176 13.87 0.0240997 13.6559 0.0777152C13.4417 0.131331 13.251 0.245715 13.1099 0.404966L7.51725 6.4813L1.92658 0.404966C1.83959 0.294804 1.72915 0.202546 1.60209 0.133969C1.47502 0.0653928 1.33407 0.0219755 1.18813 0.00643568C1.0422 -0.00910414 0.894428 0.00356873 0.754004 0.0436605C0.613578 0.0837523 0.483517 0.150399 0.372046 0.239428C0.260575 0.328456 0.170154 0.437949 0.106252 0.561048C0.0423488 0.684147 0.00645825 0.818201 0.000794369 0.954815C-0.00486856 1.09143 0.0197515 1.22766 0.0732726 1.35498C0.126795 1.48229 0.207981 1.59795 0.31175 1.69471L6.7067 8.65156C6.80686 8.76081 6.93119 8.84854 7.0713 8.90869C7.21142 8.96885 7.36393 9 7.51823 9C7.67254 9 7.82505 8.96885 7.96516 8.90869C8.10528 8.84854 8.22973 8.76081 8.32989 8.65156L14.731 1.69471C14.8987 1.51897 14.9938 1.29356 14.9997 1.05857Z" fill="#5D20D6" />
                        </svg>
                    </RadioGroupExpand>
                </RadioGroupHeader>
                {
                    [1, 2, 3, 4].map((category) => (<CustomCheckbox key={category} checked={cheched} onChange={() => { setcheched(!cheched) }} >category {category}</CustomCheckbox>))
                }
            </RadioGroup>
        </Wrapper>
    )
}