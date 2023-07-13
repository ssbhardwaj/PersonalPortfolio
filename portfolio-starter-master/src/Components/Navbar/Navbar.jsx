import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">SSBHARDWAJ</div>
            {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                  <Link spy={true} smooth={true} to='intro'>
                    <li>Home</li>
                  </Link>
                  <Link spy={true} smooth={true} to='Interests'>
                    <li>Interests</li>
                  </Link>
                  <Link spy={true} smooth={true} to='Experience'>
                    <li>Experience</li>
                  </Link>
                  <Link spy={true} smooth={true} to='Achievements'>
                    <li>Achievements</li>
                  </Link>
                  <Link spy={true} smooth={true} to='Projects'>
                    <li>Projects</li>
                  </Link>
                  <Link spy={true} smooth={true} to='SoftSkills'>
                    <li>Skills</li>
                  </Link>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
