import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IInitialState = {
    price: number
    activeCategories: {}
    activeCities: {}
}

const initialState: IInitialState = {
    price: 0,
    activeCategories: {},
    activeCities: {}
}

const filtersSlice = createSlice({
    name: 'filtersSlice',
    initialState,
    reducers: {
        setCities: (state, action: PayloadAction<{}>) => {
            state.activeCities = action.payload
        },
        setCategories: (state, action: PayloadAction<{}>) => {
            state.activeCategories = action.payload
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload
        }
    }
})

export default filtersSlice.reducer
export const { setCities, setCategories, setPrice } = filtersSlice.actions