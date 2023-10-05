import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialTS = {
    opened: boolean
}

const initialState: initialTS = {
    opened: false
}

const shopMenuBurgerSlice = createSlice({
    name: 'shopMenuBurgerSlice',
    initialState,
    reducers: {
        open(state) {
            state.opened = !state.opened
        }
    }
})

export default shopMenuBurgerSlice.reducer
export const { open } = shopMenuBurgerSlice.actions