import React from 'react'
import wp from '../../Images/wp.png'
import linkedIn from '../../Images/linkedIn.png'
import twitter from '../../Images/twitter.png'
import gmail from '../../Images/gmail.png'
import github from '../../Images/github.png'
function SocialMedya() {
    return (

        <div>
            <ul className="list-group">
                <a href="https://github.com/EmreZURNACI" ><img src={github} alt="Github Profile" className='social-media-icons border-top-right-radius' /></a>

                <a href="https://www.linkedin.com/in/emre-zurnaci-593a47252/"><img src={linkedIn} alt="LinkedIn Profile" className='social-media-icons' /></a>

                <a href="mailto:emrezurnaci38@gmail.com"><img src={gmail} alt="Mail Adresse" className='social-media-icons' /></a>

                <a href="https://api.whatsapp.com/send?phone=5061546938"><img src={wp} alt="whatsApp no" className='social-media-icons' /></a>

                <a href="https://twitter.com/emrezurnaci38"><img src={twitter} alt="Twitter Profile" className='social-media-icons border-bottom-right-radius' /></a>
            </ul>
        </div>

    )
}

export default SocialMedya