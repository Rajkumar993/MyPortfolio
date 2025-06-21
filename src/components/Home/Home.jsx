import React from 'react'
import './Home.css'
import HeroPng from '../Assests/hero.png'
export const Home = ({ScrollTohom}) => {
  return (
    <div className="home" ref={ScrollTohom}>
       <div className="homeLeft">
        <p>Hello !</p>
        <h1>I'm <span style={{color:'var(--yellow'}}>Rajkumar</span></h1>
        <p>React JS Developer</p>
       </div>
       <div className="homeRight">
        <img src={HeroPng} alt="" />
       </div>
    </div>
  )
}
