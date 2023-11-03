import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

type initialStateTS = {
    id: number
}

const initialState: initialStateTS = {
    id: -1
}

const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        setId(state, action: PayloadAction<number>){
            state.id = action.payload
        }
    }
})

export default shopSlice.reducer
export const { setId } = shopSlice.actions