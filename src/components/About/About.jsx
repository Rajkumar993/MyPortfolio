import React from 'react'
import './About.css'
import AboutPng from '../Assests/about.png'
export const About = ({ScrollToabt}) => {
  return (
   <div className="about" ref={ScrollToabt}>
   <div className="aboutLeft">
   <img src={AboutPng} alt="" />
   </div>
   <div className="aboutRight">
    <h2>About Me</h2>
        <p>Hello! I'm Rajkumar, a 2023 <span style={{color:'var(--yellow)'}}>MSc graduate </span> from N.M.S.S.V.N College, Madurai. Recently, I completed my <span style={{color:'var(--yellow)'}}>UI development course</span>  at FITA Academy, Coimbatore. I am proficient in front-end technologies including  <span style={{color:'var(--yellow)'}}>HTML, CSS, JavaScript, and React.js,</span>  and I have experience using <span style={{color:'var(--yellow)'}}> Git and GitHub</span> for version control.

I am currently seeking a front-end developer role where I can apply my skills and contribute to creating engaging,<span style={{color:'var(--yellow)'}}>user-friendly web applications.</span>  My passion for coding and dedication to continuous learning drive me to keep up with the latest industry trends and best practices.

Thank you for visiting my portfolio. Feel free to explore my projects and reach out if you'd like to connect or learn more about my work.</p>
   </div>
   </div>
  )
}
