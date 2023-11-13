import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import shopMenuBurgerSlice from "./slices/shopMenuBurgerSlice";
import shopSlice from "./slices/shopSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
    products: productsSlice,
    shopMenuBurger: shopMenuBurgerSlice,
    shop: shopSlice,
    cart: cartSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch