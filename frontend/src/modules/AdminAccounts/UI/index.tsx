import React from 'react'
import { FilterWrapper, Wrapper, } from './styled'
import { Accounts } from '../../../components/Accounts'
import { Filters } from '../../../UI/Filter'
import { useQuery } from 'react-query'
import { getAccounts } from '../models/getAccounts'

export const AdminAccounts: React.FC = () => {
    const { data, isLoading, isError } = useQuery('accountsFilter', getAccounts)
    type option = { value: string, label: string }
    const [category, setCategory] = React.useState<option | null>({ label: 'Filter by Category', value: '' })
    if (isError) console.error('Shop Accounts: Query error')
    const options: { value: string, label: string }[] = data && data.length > 0
        ? data.map(el => {
            return {
                value: el.id,
                label: el.title
            }
        })
        : [
            {
                value: '',
                label: ''
            }
        ]
    const onChange = (newValue: option | null) => {
        setCategory(newValue)
    }
    return (
        <Wrapper>
            <FilterWrapper>
                <Filters options={options} onChange={onChange} value={category} isLoading={isLoading} classNamePrefix={'Select'}></Filters>
            </FilterWrapper>
            <Accounts />
        </Wrapper>
    )
}
