import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        authId:'',
        isLogin:false
    },
    reducers:{
        updateauthId:(state,action)=>{
            state.authId = action.payload;
            state.isLogin = true;
        }
    }
})

export const {updateauthId} = authSlice.actions;

export default authSlice.reducer;