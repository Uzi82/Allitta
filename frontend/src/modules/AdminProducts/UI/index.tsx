import React from 'react'
import { HeaderWrapper, Wrapper, } from './styled'
import { Products } from '../../../components/Products'
import { ProductsFilter } from '../../../components/ProductsFilter'
import { Search } from '../../../UI/Search'

export const AdminProducts: React.FC = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Search placeholder='Search Product' />
                <ProductsFilter></ProductsFilter>
            </HeaderWrapper>
            <Products />
        </Wrapper>
    )
}
