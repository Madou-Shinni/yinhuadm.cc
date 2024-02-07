import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playVideo: {},
}

export const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        setPlayVideo: (state,action) => {
            state.playVideo = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPlayVideo } = playSlice.actions

export default playSlice.reducer