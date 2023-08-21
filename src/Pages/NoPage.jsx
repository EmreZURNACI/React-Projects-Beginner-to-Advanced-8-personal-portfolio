import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { capitalize } from '../textCapitiliza';
function NoPage() {
    const { t } = useTranslation();
    return (
        <div className='vw-100 vh-100 p-0 m-0 d-flex justify-content-center align-items-center flex-column gap-3'>
            <Helmet>
                <title>{capitalize(t("Sayfa Bulunamadı"))}</title>
            </Helmet>
            <h1 className='m-0 p-0 text-danger'>{capitalize(t("Sayfa Bulunamadı"))}</h1>
            <NavLink className={'text-secondary fs-3 text-decoration-none border-1 border border-secondary px-2 py-1 rounded-3 text-center align-middle'} to='/'>{capitalize(t("Anasayfa Dön"))}</NavLink>
        </div>
    )
}

export default NoPage