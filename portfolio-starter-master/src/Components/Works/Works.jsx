import React from 'react'
import './Works.css'
import BIT from "../../img/bitmesra.jpg"
import IEEE from "../../img/ieee.png"
import IET from "../../img/iet.png"
import RV from "../../img/rv.jpg"
import NSS from "../../img/nss.jpg"

const Works = () => {
  return (
    <div className='works' id='Experience'>
      {/* left side */}
      <div className="awesome">
        <span>Studied and worked with all these</span>
        <span>Brands and Institutions</span>
        <span>
            * Did my 10 and 12 from Rajendra Vidyalaya, Jamshedpur.
            <br/>
            * Persuing B.TECH in ECE from BIT MESRA, Ranchi.
            <br/> 
            * Active member of IET students chapter, BIT MESRA, Ranchi.
            <br/> 
            * Member of IEEE students chapter, BIT MESRA, Ranchi.
            <br/> 
            * Participated in various activies of NSS, BIT MESRA, Ranchi.
        </span>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right side */}
      <div className='w-right'>
        <div className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={RV} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={IET} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={BIT} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={IEEE} alt="" />
            </div>
            <div className='w-secCircle'>
                <img src={NSS} alt="" />
            </div>
        </div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yelloCircle"></div>
      </div>
    </div>
  )
}

export default Works
