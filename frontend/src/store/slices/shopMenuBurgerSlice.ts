import { createSlice } from "@reduxjs/toolkit";

type initialTS = {
    opened: boolean | undefined
}

const initialState: initialTS = {
    opened: undefined
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