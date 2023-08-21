import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("Light");
    const data = {
        theme, setTheme
    }
    return (
        <ThemeContext.Provider value={data}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;
export const useThemeContext = () => useContext(ThemeContext);