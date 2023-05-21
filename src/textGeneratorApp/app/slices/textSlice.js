import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataWithHtml = createAsyncThunk(
    'getDataWithHtml',
    async ({ paras, modal }) => {
        const response = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1&format=${modal}`);
        return response.data;
    }
);


const textSlice = createSlice({
    name: 'text',
    initialState: {
        items: [],
        paras: 1,
        modal: 'text',
        status: 'idle',
        error: null,

    },
    reducers: {
        updateParas: (state, action) => {
            state.paras = action.payload;
        },
        updateModal: (state, action) => {
            state.modal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataWithHtml.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(getDataWithHtml.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        })
        builder.addCase(getDataWithHtml.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },

})
export const { updateModal, updateParas } = textSlice.actions;
export default textSlice.reducer;