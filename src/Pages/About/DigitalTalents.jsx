import React from 'react'
import { useThemeContext } from '../../Contexts/ThemeCon';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../textCapitiliza';
function DigitalTalents() {
    const {t}=useTranslation();
    const yenetekler = ["React.js", "Php", "C#", "Mssql", "Mysql", "PhpMyAdmin", "Electron.js", "HTML5", "CSS3", "Bootstrap", "JavaScript", "Jquery", "Entityframework", "Algorithm","MongoDb"];
    const { theme } = useThemeContext();
    return (
        <>
            <div className='mt-4 container ps-2 dijitalyetenekler'>
                <h2 className={"fs-3 " + (theme === "Light" ? " text-dark" : " text-light")}>{capitalize(t("Dijital yetenekler"))}</h2>
                <div className='d-flex justify-content-center align-items-center'>
                    <ul className='p-0'>
                        {
                            yenetekler.map((yetenek, index) => (
                                <li className={"list-unstyled px-2 py-1 d-flex align-items-center justify-content-center " + (theme === "Light" ? " text-dark darkShadow" : " text-light lightShadow")}
                                    key={index}>
                                    <span className='ps-2 fs-5'>{yetenek.toUpperCase()}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DigitalTalents