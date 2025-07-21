import postItemReducer from "./postItemSlice"
const { createSlice, configureStore } = require("@reduxjs/toolkit");
const initialAuthState = { isAuthenticated : false}
const authSlice = createSlice({
    name : "auth",
    initialState : initialAuthState,
    reducers : {
        login(state)
        {
            state.isAuthenticated = true;
        },
        logout(state)
        {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer : {auth : authSlice.reducer, postItem : postItemReducer}
})

export const isAuthActions = authSlice.actions
export default store