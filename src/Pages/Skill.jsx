import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeContext } from '../Contexts/ThemeCon';
function Skill({ lang, imagePath }) {
    const { theme } = useThemeContext();
    return (
        <div className='container d-flex align-items-center justify-content-center p-2 skill'>
            <img src={imagePath} alt={lang + ' Language'} className={"h-100 w-100 rounded-2 "+(theme === "Light" ? 'darkShadow' : 'lightShadow')} />
        </div>
    )
}

export default Skill