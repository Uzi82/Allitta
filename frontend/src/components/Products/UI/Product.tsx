import { useState } from 'react'
import { type Product as ProductType,
         open,
         setType,
         useAppDispatch,
         useAppSelector,
         setName,
} from '../'
import { Product, 
         ProductEl, 
         Status, 
         ProductBtn, 
         ProductBtnContainer,
         ToolTip, 
         Arrow,
         ToolTipBtn
} from './styled'


export const ProductComponent: React.FC<{ el: ProductType }> = ({ el }) => {
    const [active, setActive] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const opened = useAppSelector(state=>state.products.opened)
    const changeActive = () => active ? setActive(false) : setActive(true)
    return (
        <Product key={el.number}>
            <ProductEl>
                #{ el.number }
            </ProductEl>
            <ProductEl>
                { el.name }
            </ProductEl>
            <ProductEl>
                { el.category }
            </ProductEl>
            <ProductEl> {/* Элемент пустого места в центре */} </ProductEl>
            <ProductEl>
                { el.quantity }
            </ProductEl>
            <ProductEl>
                { el.currency }{ el.coast }
            </ProductEl>
            <ProductEl>
                <Status $process={el.status === 'New' ? false : true}>
                    { el.status }
                </Status>
            </ProductEl>
            <ProductBtnContainer>
                <ProductBtn onClick={()=>changeActive()} />
                <ToolTip $active={active && !opened}>
                    <Arrow src={require('./Beak.png')} />
                    <ToolTipBtn onClick={()=>{dispatch(setType('edit')); changeActive(); dispatch(open())}}>
                        Edit
                    </ToolTipBtn>
                    <ToolTipBtn onClick={()=>{dispatch(setType('feedbacks')); changeActive(); dispatch(open()); dispatch(setName(el.name))}}>
                        Feedbacks
                    </ToolTipBtn>
                </ToolTip>
            </ProductBtnContainer>
        </Product>
    )
}