import counterReducer from '@/store/slices/counterSlice.js'
import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "@/store/slices/home.js";
import detailReducer from "@/store/slices/detail.js";
import playReducer from "./slices/play.js";

const rootReducer = {
    counter: counterReducer,
    home: homeReducer,
    detail: detailReducer,
    play: playReducer
}

export const store = configureStore({
    reducer: rootReducer,
})