import React from 'react'
import { PriceWrapper, PriceInput, MaxPriceTitle, PriceSelect } from './styled'
import { Title } from '../Filters.styled'

interface PriceProps {
    setPrice: React.Dispatch<React.SetStateAction<number>>
}

export const Price: React.FC<PriceProps> = ({ setPrice }) => {
    const maxPrice = 10000
    const [localPrice, setLocalPrice] = React.useState(maxPrice / 2)
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLocalPrice(+e.target.value)
    }
    React.useEffect(() => {
        const id = setTimeout(() => {
            setPrice(localPrice)
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    }, [localPrice])
    return (
        <PriceWrapper>
            <Title $mb="10px">Price</Title>
            <PriceInput min={0} max={maxPrice} value={localPrice} onChange={onChange} />
            <MaxPriceTitle>Max price Rs. {localPrice}</MaxPriceTitle>
            <PriceSelect placeholder='Price'>
                <option value={1}>Lower To Higher</option>
                <option value={2}>Higher To Lower</option>
            </PriceSelect>
        </PriceWrapper>
    )
}