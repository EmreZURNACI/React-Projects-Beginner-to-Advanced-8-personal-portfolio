import React from 'react'
import Abilities from './Abilities'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../textCapitiliza'
function FullSite() {
    const {t}=useTranslation();
    return (
        <div>
            <Home />
            <About />
            <Abilities />
            <Contact />
            <Helmet>
                <title>{capitalize(t("kisisel sayfa"))}</title>
            </Helmet>
        </div>
    )
}

export default FullSite