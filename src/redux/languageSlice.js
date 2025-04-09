import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: localStorage.getItem("language") || "vi"
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem("language", action.payload);
        }
    }
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
