import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../slices/textSlice";


export const store = configureStore({
    reducer: {
        text: textSlice,
    }
})