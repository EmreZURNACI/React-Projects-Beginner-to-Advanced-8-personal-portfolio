import React from 'react'
import { Helmet } from 'react-helmet';
import KisiselBilgiler from '../Pages/About/KisiselBilgiler.jsx';
import DigitalTalents from '../Pages/About/DigitalTalents.jsx';
import EgitimveStaj from '../Pages/About/EgitimveStaj.jsx';
import Iletisim from '../Pages/About/Iletisim.jsx';
import Hobiler from '../Pages/About/Hobiler.jsx';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../textCapitiliza.js';
function About() {
  const {t}=useTranslation();
  return (
    <div>
      <Helmet>
        <title>{capitalize(t("Hakkımda"))}</title>
      </Helmet>
      <div className='container mt-2 about'>
        <div className='row px-2'>
          <div className='p-4 col-8 mx-auto'>
            <KisiselBilgiler />
            <Iletisim />
            <EgitimveStaj />
            <DigitalTalents />
            <Hobiler />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About