import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type el = {
    id: string
    name: string,
    logotype_path: string,
    price: number,
    currency: string
}

type initialStateTs = {
    list: {
        [key: string]: {
            id: string
            name: string,
            logotype_path: string,
            amount: number,
            price: number,
            currency: string
        }
    }
}

const initialState: initialStateTs = {
    list: {}
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<el>) {
            let id = action.payload.id
            if (state.list[id] === undefined) state.list[id] = {
                ...action.payload,
                amount: 1
            }
            else state.list[id].amount = state.list[id].amount + 1
        },
        changeAmount(state, action: PayloadAction<{ id: string, newAmount: number }>) {
            state.list[action.payload.id].amount = action.payload.newAmount 
            if(action.payload.newAmount === 0) delete state.list[action.payload.id]
        }
    }
})

export default cartSlice.reducer
export const { addProduct, changeAmount } = cartSlice.actions