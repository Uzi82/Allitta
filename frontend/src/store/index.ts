import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";

const rootReducer = combineReducers({
    categories: categorySlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch