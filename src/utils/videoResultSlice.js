import { createSlice } from "@reduxjs/toolkit";

const videoResultSlice=createSlice({
    name:"searchVideos",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videos=action.payload
        },
        removeVideos:(state)=>{
            state.videos=[]
        }
    }
});

export const{addVideos,removeVideos}=videoResultSlice.actions;
export default videoResultSlice.reducer;