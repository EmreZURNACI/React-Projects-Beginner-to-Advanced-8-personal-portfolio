import React from 'react'
import Avatar from '../../Images/WhatsApp Image 2023-02-20 at 00.14.35.jpg';
import { FaGripLinesVertical } from 'react-icons/fa';
import { useThemeContext } from '../../Contexts/ThemeCon';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../textCapitiliza';
function KisiselBilgiler() {
    const { theme } = useThemeContext();
    const { t } = useTranslation();
    return (

        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={Avatar} alt="Osman-Emre-ZURNACI" className='border-none rounded-circle img-fluid ' width={200} height={200} />
            </div>
            <h1 className={"text-center " + (theme === "Light" ? " text-dark" : " text-light")}>Osman Emre ZURNACI</h1>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='line w-75 d-flex'></div>
            </div>
            <p className={"text-center " + (theme === "Light" ? " text-dark" : " text-light")}>
                {capitalize(t("typeWriterContent")) }
            </p>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <p className={"px-2 my-0 text-center " + (theme === "Light" ? " text-dark " : " text-light")}><span className='fw-bold'>{capitalize(t("dogum tarihi")) }:</span>26.02.2003</p><FaGripLinesVertical className='fs-5'></FaGripLinesVertical>
                <p className={"px-2 my-0 text-center " + (theme === "Light" ? " text-dark " : " text-light")}><span className='fw-bold'>{capitalize(t("vatandaşlık")) }:</span>T.C</p>
            </div>
        </div >
    )
}

export default KisiselBilgiler