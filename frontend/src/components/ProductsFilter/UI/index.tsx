import { useState } from "react"
import { useQuery } from "react-query"
import { getCategories,
         Filters 
} from "../"

export const ProductsFilter: React.FC = () => {
    const { data, isLoading, isError } = useQuery('productsFilter', getCategories)
    type option = {value: string, label: string}
    const [category, setCategory] = useState<option|null>({label: 'Filter by Category', value: ''})
    if(isError) console.error('Shop Categories: Query error')
    const options: {value: string, label: string}[] = data && data.length > 0
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
    return(
        <Filters options={options} onChange={onChange} value={category} isLoading={isLoading} classNamePrefix={'Select'} />
    )
}