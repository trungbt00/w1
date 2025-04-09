import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    userEmail: localStorage.getItem("userEmail") || "",
    userName: localStorage.getItem("userName") || "",
    userPhone: localStorage.getItem("userPhone") || "",
    userId: localStorage.getItem("userId") || "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, name, phonenumber, id } = action.payload;
            state.isLoggedIn = true;
            state.userEmail = email;
            state.userName = name;
            state.userPhone = phonenumber;
            state.userId = id;

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userName", name);
            localStorage.setItem("userPhone", phonenumber);
            localStorage.setItem("userId", id);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userEmail = "";
            state.userName = "";
            state.userPhone = "";
            state.userId = "";

            localStorage.clear();
        }
    }
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
