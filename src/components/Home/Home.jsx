/* eslint-disable react/no-unescaped-entities */

import './Home.css'
import HeroPng from '../Assests/hero.png'
// eslint-disable-next-line react/prop-types
export const Home = ({ScrollTohom}) => {
  return (
    <div className="home" ref={ScrollTohom}>
       <div className="homeLeft">
        <p>Hello !</p>
        <h1>I'm <span style={{color:'var(--yellow'}}>Rajkumar</span></h1>
        <p>ReactJS Developer</p>
       </div>
       <div className="homeRight">
        <img src={HeroPng} alt="" />
       </div>
    </div>
  )
}
