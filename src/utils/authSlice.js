import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:null,
    reducers:{
        updateAuth:(state,action)=>{
            return action.payload;
        },
        signout:(state,action)=>{
            return null;
        }
    }
})

export const {updateAuth,signout} = authSlice.actions;

export default authSlice.reducer;