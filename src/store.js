import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSwitch/themeSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
    }
});