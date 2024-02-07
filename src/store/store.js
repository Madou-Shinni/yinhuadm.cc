import counterReducer from '@/store/slices/counterSlice.js'
import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "@/store/slices/home.js";

const rootReducer = {
    counter: counterReducer,
    home: homeReducer,
}

export const store = configureStore({
    reducer: rootReducer,
})