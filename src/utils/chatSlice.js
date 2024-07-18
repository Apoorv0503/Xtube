import { createSlice } from "@reduxjs/toolkit";
import {LIVE_CHAT_OFFSET} from "../utils/constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            //remove 1 element from the array when count hit 15(total no of elements in array)
            //deletion of elements from end of array
            state.messages.splice(LIVE_CHAT_OFFSET,1);

            //while insertion from the start of array
            state.messages.unshift(action.payload);
        }
    }
});

export const{addMessage}=chatSlice.actions;
export default chatSlice.reducer;



/*

Splice method:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// from index 2(inclusive), remove 2 items
fruits.splice(2, 2);

//output: ["Banana", "Orange"]



*/