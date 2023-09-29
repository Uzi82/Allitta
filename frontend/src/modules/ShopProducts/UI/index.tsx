import { Products,
         ProductsFilter,
         useAppDispatch,
         useAppSelector,
         SimpleBlur,
         open,
         setType,
         AddProdModal
} from "../"
import { 
    AddNew,
    AddNewPng,
    Buttons, 
    Content,
    Search
} from "./styled"

export const ShopProducts: React.FC = () => {
    const { type, opened } = useAppSelector(state=>state.products)
    const dispatch = useAppDispatch()
    return(
        <Content>
            <Buttons>
                <Search />
                <ProductsFilter />
                <AddNew onClick={()=>{dispatch(setType('add')); dispatch(open())}}>
                    Add New Product
                    <AddNewPng src={require('./addNew.png')} />
                </AddNew>
            </Buttons>
            <Products />
            <SimpleBlur active={opened}>
                {
                    type === 'add'
                        ? <AddProdModal />
                        : type === 'edit'
                            ? <>edit</>
                            : <>Feedback</>
                }
            </SimpleBlur>
        </Content>
    )
}