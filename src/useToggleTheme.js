import { useState } from "react";

const useToggleTheme = () => {
    const [themeState, setThemeState] = useState("light");
  
    const toggleTheme = () => {
      themeState === "light" ? setThemeState("dark") : setThemeState("light");
    };

    return {
        themeState,
        toggleTheme,
    };
};
export default useToggleTheme;