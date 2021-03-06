import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isLightTheme: true,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isLightTheme = !state.isLightTheme;
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export const selectThemeState = state => state.theme;
export default themeSlice.reducer;