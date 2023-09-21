import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type category = {
    id: string, 
    name: string,
    path: string
}

const initialState: { data: category[]} = {
    data: []
}

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<category[]>) {
            state.data = action.payload
        }
    }
})

export default categorySlice.reducer
export const { setCategories } = categorySlice.actions