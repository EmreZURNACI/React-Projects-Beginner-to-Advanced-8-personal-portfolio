import React from 'react'
import { IoLocationSharp } from 'react-icons/io5';
import { useThemeContext } from '../../Contexts/ThemeCon';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../textCapitiliza';
function EgitimveStaj() {
    const { theme } = useThemeContext();
    const { t } = useTranslation();
    return (
        <div className='mt-3 container ps-2'>
            <h2 className={"fs-3 " + (theme === "Light" ? " text-dark  " : " text-light")}>{capitalize(t("Eğitim ve Staj"))}</h2>
            <div className='row mt-3'>
                <div className='col-1 d-flex flex-column align-items-center gap-0-1 p-0 '>
                    <div className='lineCircle'></div>
                    <div className='vertLine'></div>
                </div>
                <div className='col-11 p-0'>
                    <div>
                        <div className='d-flex flex-column py-3'>
                            <h3 className={"universite fs-4 p-0 m-0 fs-3 " + (theme === "Light" ? " text-dark " : " text-light")} >Balıkesir {capitalize(t("universite"))}</h3>
                            <span>Balıkesir {capitalize(t("universite"))}</span>
                            <span className='text-secondary'>27/09/2021 – {capitalize(t("Mevcut durum"))}</span>
                        </div>
                        <div className='ps-2'>
                            <div className='d-flex flex-column'>
                                <p className={theme === "Light" ? " m-0 text-dark " : " m-0 text-light"}><IoLocationSharp className='fs-4' ></IoLocationSharp>{capitalize(t("okulKonum"))} 10145, BALIKESİR, 10145, BALIKESİR, Türkiye | <a href="https://www.balikesir.edu.tr/">Balıkesir Üniversitesi</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EgitimveStaj