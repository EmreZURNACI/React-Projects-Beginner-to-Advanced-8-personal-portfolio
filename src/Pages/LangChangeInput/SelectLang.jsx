import React from 'react'
import { GiWorld } from 'react-icons/gi'
import { useThemeContext } from '../../Contexts/ThemeCon';
import { useTranslation } from 'react-i18next';
function SelectLang() {
    const { t,i18n } = useTranslation();
    const { theme } = useThemeContext();
    const countryList = ["tr-TR", "en-US", "es-ES", "fr-FR", "de-DE", "ru-RU", "pt-PT", "it-IT"];
    return (
        <>
            <div className="dropdown">
                <button className={theme === "Light" ? 'btn btn-outline-dark dropdown-toggle' : 'btn btn-outline-light dropdown-toggle'} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {
                        t("Diller")
                    } &nbsp;<GiWorld className='fs-4'></GiWorld>
                </button>
                <ul className={theme === "Light" ? "dropdown-menu py-0 bg-dark " : "dropdown-menu py-0 bg-light text-dark"}>
                    {
                        countryList.map((country, index) => (
                            <li key={index} className={"flag " + country.substring(0, 2)}>
                                <button className={"w-100 h-100 dropdown-item p-0"} value={country} onClick={(e) => i18n.changeLanguage(e.target.value)}>
                                    &nbsp;
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default SelectLang