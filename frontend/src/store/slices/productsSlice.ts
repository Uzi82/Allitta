import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialType = {
    type: string,
    opened: boolean,
    editId: string
}

const initialState: initialType = {
    type: 'addProduct',
    opened: false,
    editId: ''
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        open(state) {
            state.opened = !state.opened
        },
        setType(state, action: PayloadAction<string>) {
            state.type = action.payload
        }
    }
})

export default productsSlice.reducer
export const { open, setType } = productsSlice.actions