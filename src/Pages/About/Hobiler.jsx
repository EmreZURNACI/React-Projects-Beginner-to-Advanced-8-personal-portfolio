import React from 'react'
import { useThemeContext } from '../../Contexts/ThemeCon';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../textCapitiliza';
function Hobiler() {
    const { theme } = useThemeContext();
    const { t } = useTranslation();
    return (
        <>
            <div className='mt-4 container ps-2 '>
                <h2 className={theme === "Light" ? " text-dark fs-3" : " text-light fs-3"}>{capitalize(t("Hobiler ve İlgi Alanlarım"))}</h2>
                <div className='container'>
                    <h3 className={theme === "Light" ? " text-dark fs-5" : " text-light fs-5"}> {capitalize(t("Algoritma ve kodlama"))}</h3>
                    <p className={"algoritmaveprogramlama " + (theme === "Light" ? " text-dark " : " text-light")} >{capitalize(t("hobiContent"))}</p>
                </div>
            </div>
        </>
    )
}

export default Hobiler