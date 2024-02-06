import counterReducer from '@/store/slices/counterSlice.js'
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = {
    counter: counterReducer,
}

export const store = configureStore({
    reducer: rootReducer,
})