import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
// import Codeforces from '@iconscout/react-unicons/icons/uil-codeforces'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>as920794sumanshekharbhardwaj@gmail.com</span>
            <div className="f-icons">
            <a href='https://www.instagram.com/sumanshekharbhardwaj/' target='_blank'>
            <Insta color='white' size='3rem'/>
                </a>
            <a href='https://m.facebook.com/suman.bharadwaj.528' target='_blank'>
            <Facebook color='white' size='3rem'/>
                </a>
            <a href='https://github.com/ssbhardwaj' target='_blank'>
            <Github color='white' size='3rem'/>
                </a>
                
                
                
                {/* <Codeforces color='white' size='3rem'/> */}
            </div>
        </div>
    </div>
  )
}

export default Footer
