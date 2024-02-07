import { createSlice } from '@reduxjs/toolkit'
import {getCurrentDate} from "../../utils/date.js";

const initialState = {
    activeWeekday: getCurrentDate(),
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setActiveWeekday: (state,action) => {
            state.activeWeekday = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setActiveWeekday } = homeSlice.actions

export default homeSlice.reducer