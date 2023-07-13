import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card.jsx'
import Resume from './SOP.pdf'

const Services = () => {
  return (
    <div className='services' id='Interests'>
      {/* left side */}
      <div className="awesome">
        <span>Some of my</span>
        <span>Interests</span>
        <span>A curious mind with a passion for exploring the intersections of art, science, and nature, 
            <br/>
            finding inspiration in the beauty of the world and the wonders of human creativity.
        </span>
        <a href={Resume} download>
        <div className="button s-button">Download CV</div>
        </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left: '14rem'}}>
            <Card
                emoji = {HeartEmoji}
                heading = {'DSA'}
                detail = {'Trees, Graphs, DP, Trie, Linked Lists, and many more...'}
            />
        </div>
        <div style={{top:"12rem", left:"-4rem"}}>
            <Card
                emoji={Glasses}
                heading={"Development"}
                detail={"Html, CSS, Javascript, React, Node, Express, MongoDB"}
            />
        </div>
        <div style={{top:"19rem", left:"12rem"}}>
            <Card
                emoji={Humble}
                heading={"Teaching"}
                detail={"Coding Concepts - C++ lang, STL, Time Complexity, Arrays, Recursion & Backtracking, Trees, Graphs, DP"}
            />
        </div>
        <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
