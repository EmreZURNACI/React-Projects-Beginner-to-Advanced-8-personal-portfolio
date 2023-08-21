import React from 'react'
import { AiFillPhone } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { useThemeContext } from '../../Contexts/ThemeCon';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../textCapitiliza';
function Iletisim() {
    const { theme } = useThemeContext();
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='mt-3'>
                <h2 className={theme === "Light" ? "text-center text-dark" : "text-center text-light"}>{capitalize(t("ileşitim bilgileri")) }</h2>
                <div className='d-flex justify-content-center align-items-center'>
                    <ul className='p-0 iletisim'>
                        <li
                            className={"list-unstyled d-flex align-items-center " + (theme === "Light" ? " text-dark  " : " text-light")}
                        ><AiFillPhone className='fs-5' ></AiFillPhone><span className='fw-bold'>{capitalize(t("cep")) }:</span> (+90) 506 154 69 38</li>
                        <li
                            className={"list-unstyled d-flex align-items-center " + (theme === "Light" ? " text-dark  " : " text-light")}
                        ><IoLocationSharp className='fs-5' ></IoLocationSharp><span className='fw-bold'>{capitalize(t("adres")) }:</span> Cemil Meriç {capitalize(t("mahalle")) } İhtişam {capitalize(t("sokak")) } 16A/9 Ümraniye/İSTANBUL, 34764 ÜMRANİYE, Türkiye</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Iletisim