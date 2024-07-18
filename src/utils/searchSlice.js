import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        // copying the previous keyword search results and new data came
        cacheResults:(state,action)=>{
            state=Object.assign(state, action.payload)
        }
    }
});

export const{cacheResults}=searchSlice.actions;
export default searchSlice.reducer;