import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name:'movie',
    initialState:{},
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovie} = movieSlice.actions;

export default movieSlice.reducer;