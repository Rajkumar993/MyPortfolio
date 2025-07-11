/* eslint-disable react/prop-types */
import  { useState } from 'react'
import Resume1 from '../Assests/media/Resume.jpg'
import Resumejpg from '../Assests/resume.jpg'
import ResumePDF from '../Assests/media/Rajkumar Resume.pdf'
import './Resume.css'
export const Resume = ({ScrollTores}) => {
  const[open,setOpen]=useState(false)
  const[close,setclose]=useState(true)
  function showResume(){
    setOpen(true)
    setclose(false)
  }
  function closeResume(){
    setOpen(false)
    setclose(true)
  }
  return (
< >
<div className="Resume" ref={ScrollTores} >
   {open &&  <div className="myResume">

      <img src={Resume1} alt="" />
      <button onClick={closeResume}>X</button>
      </div> }  
   {close && <><div className="ResumeLeft">
        
        <h2>Resume</h2>
        <div className="view">
          <p>You Can View My Resume</p>
          <button onClick={showResume} >Open</button>
       <button><a href={ResumePDF} download={'Resume.pdf'}>Download</a></button>   
        </div>
       </div>
       <div className="ResumeRight">
        <img src={Resumejpg} alt="" />
       </div>
       </>}
    </div></>
  )
}
