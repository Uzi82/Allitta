export { Products } from './UI'
export type { Product } from './models/types'
export { getShopProducts } from './models/getShopProducts'
export { LazyLoad } from '../../UI/LazyLoading'
export { open, setType } from '../../store/slices/productsSlice'
export { useAppDispatch } from '../../hooks/reduxHooks'