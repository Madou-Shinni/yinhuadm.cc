import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activePlayLine: 2,
}

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setActivePlayLine: (state,action) => {
            state.activePlayLine = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setActivePlayLine } = detailSlice.actions

export default detailSlice.reducer