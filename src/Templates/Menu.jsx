import React from 'react'
import { useThemeContext } from '../Contexts/ThemeCon';
import { NavLink } from 'react-router-dom';
import { RiComputerFill } from 'react-icons/ri'
import '../App.css';
import '../Pages/ThemeChangeInput/style.css';
import Input from '../Pages/ThemeChangeInput/Input'
import SelectLang from '../Pages/LangChangeInput/SelectLang';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { capitalize } from '../textCapitiliza';
function Menu() {
    const { t } = useTranslation();
    const { theme } = useThemeContext();
    return (
        <div className='container'>
            <nav className={"navbar navbar-expand-lg " + (theme === "Light" ? "bg-light" : "bg-dark")}>
                <div className="container-fluid">
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='px-2 py-1'>
                            <NavLink to={"/"} className={'text-decoration-none fs-1 d-flex justify-content-center align-items-center'}><RiComputerFill /></NavLink>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars className={(theme === "Light" ? "text-dark" : "text-white")}></FaBars>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className='list-unstyled px-2 py-1' >
                                <NavLink className={theme === "Light" ? 'text-decoration-none fs-5 text-dark border-bottom border-2 border-dark' : 'text-decoration-none fs-5 text-light border-bottom border-2 border-light'} to={'Home'} >{capitalize(t("Anasayfa"))}</NavLink>
                            </li>
                            <li className='list-unstyled px-2 py-1' >
                                <NavLink className={theme === "Light" ? 'text-decoration-none fs-5 text-dark border-bottom border-2 border-dark' : 'text-decoration-none fs-5 text-light border-bottom border-2 border-light'} to={'Abilities'} >{capitalize(t("Yetenekler"))}</NavLink>
                            </li>
                            <li className='list-unstyled px-2 py-1' >
                                <NavLink className={theme === "Light" ? 'text-decoration-none fs-5 text-dark border-bottom border-2 border-dark' : 'text-decoration-none fs-5 text-light border-bottom border-2 border-light'} to={'About'} >{capitalize(t("Hakkımda"))}</NavLink>
                            </li>
                            <li className='list-unstyled px-2 py-1' >
                                <NavLink className={theme === "Light" ? 'text-decoration-none fs-5 text-dark border-bottom border-2 border-dark' : 'text-decoration-none fs-5 text-light border-bottom border-2 border-light'} to={'Contact'} >{capitalize(t("İletişim"))}</NavLink>
                            </li>
                            <li className='d-flex align-items-center justify-content-start gap-1'>
                                <Input />
                                <SelectLang />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div >
    )
}

export default Menu



