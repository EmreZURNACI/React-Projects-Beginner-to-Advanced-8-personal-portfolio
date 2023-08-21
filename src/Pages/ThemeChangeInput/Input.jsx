import React from 'react'
import '../ThemeChangeInput/style.css'
import { useThemeContext } from '../../Contexts/ThemeCon'
function Input() {
    const { theme, setTheme } = useThemeContext();
    return (

        <>
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={() => {
                    const _theme = theme === "Light" ? "Dark" : "Light"; setTheme(_theme);
                }} />
                <div className="slider round"></div>
            </label>
        </>

    )
}

export default Input