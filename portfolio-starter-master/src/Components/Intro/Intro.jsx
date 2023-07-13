import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/Jonny.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <div className='intro'  id='intro'>
        <div className="i-left">
            <div className="i-name">
                <span >Hy! I Am</span>
                <span >Suman Shekhar Bhardwaj</span>
                <span>B.Tech Electronics and Communication Engineering Undergrad at Birla Institute of Technology Mesra</span>
            </div>
            <div className="i-icons">
                <a href='https://github.com/ssbhardwaj' target='_blank'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/suman-shekhar-bhardwaj-240513237/' target='_blank'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href='https://www.instagram.com/sumanshekharbhardwaj/' target='_blank'>
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right"  id='intro'>
            {/* <img src={Vector1} alt="" /> */}
            {/* <img src={Vector2} alt="" /> */}
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: '-4%', left: '60%'}} children="FD">
                <FloatingDiv image={Crown} txt1="Competitive" txt2="Programmer"/>
            </div>
            <div style={{top: '18.43rem', left: '1.5rem'}}>
                <FloatingDiv image={thumbup} txt1="Wev" txt2="Developer"/>
            </div>
            {/* blur divs */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>
        </div>
    </div>
  )
}

export default Intro
