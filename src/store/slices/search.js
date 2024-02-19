import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    total: 0,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTotal: (state,action) => {
            state.total = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTotal } = searchSlice.actions

export default searchSlice.reducer