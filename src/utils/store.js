import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoResultSlice from "./videoResultSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        searchVideos:videoResultSlice,
        chat:chatSlice
    }
});

export default store;