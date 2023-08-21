import React from 'react';
import Avatar from '../Images/WhatsApp Image 2023-02-20 at 00.14.35.jpg'
import { Helmet } from 'react-helmet';
import Writer from '../Templates/TypeWriter/Writer';
import SocialMedia from '../Pages/About/SocialMedia'
import { useTranslation } from 'react-i18next';
import { capitalize } from '../textCapitiliza';
function Home() {
  const { t } = useTranslation();
  return (
    <div className='content-area position-relative'>
      <Helmet>
        <title>{capitalize(t("Anasayfa"))}</title>
      </Helmet>
      <div className='home w-100 h-100 d-flex align-items-center'>
        <div className='container'>
          <div className="row">
            <div className='col-6 mx-auto d-flex align-items-center justify-content-center hidden typewriter '>
              <Writer />
            </div>
            <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
              <img src={Avatar} alt="It's Me" width={"550px"} height={"550px"} className='rounded-5 img-fluid' />
            </div>
          </div>
        </div>
        <div className='socialmedia'>
          <SocialMedia />
        </div>
      </div>
    </div >
  )
}

export default Home