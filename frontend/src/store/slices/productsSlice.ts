import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialType = {
    type: string,
    opened: boolean,
    id: string,
    name: string
}

const initialState: initialType = {
    type: 'addProduct',
    opened: false,
    id: '',
    name: ''
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
        },
        setId(state, action: PayloadAction<string>) {
            state.id = action.payload
        },
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload
        }
    }
})

export default productsSlice.reducer
export const { open, setType, setId, setName } = productsSlice.actions