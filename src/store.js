import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSwitch/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,      
    },
});
export default store;