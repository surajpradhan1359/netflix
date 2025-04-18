import { createSlice } from "@reduxjs/toolkit";


export const popupSlice = createSlice({
    name:"popup",
    initialState:{
        isOpen:false,
        message:""
    },
    reducers:{
        show:(state,action)=>{
            return {
                ...state,
                isOpen:true,
                message:action.payload
            }
        },
        hide:(state)=>{
            return{
                ...state,
                isOpen:false,
                message:""
            }
        }
    }
})


export const {show,hide} = popupSlice.actions;

export default popupSlice.reducer;