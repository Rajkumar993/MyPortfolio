import React, { useState } from 'react'
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";
export const Header = ({ScrolltoHome,ScrolltoAbout,ScrolltoProjects,ScrolltoResume,ScrolltoContact}) => {
  const[home,setHome]=useState(true)
  const[about,setAbout]=useState(false)
  const[projects,setProjects]=useState(false)
  const[resume,setResume]=useState(false)
  const[contact,setContact]=useState(false)
  const[showItems,setShowItems]=useState(false)
  function handleShow(){
    setShowItems(!showItems)
  }
  function handleChange(e){
   const value=e.target.innerHTML.toLowerCase();
   setShowItems(false)
   if(value=='home'){
     setHome(true)
     setAbout(false)
     setProjects(false)
     setContact(false)
     setResume(false)
   }
   if(value=='about'){
    setHome(false)
    setAbout(true)
    setProjects(false)
    setContact(false)
    setResume(false)
   }
   if(value=='projects'){
    setHome(false)
    setAbout(false)
    setProjects(true)
    setContact(false)
    setResume(false)
   }
   if(value=='contact'){
    setHome(false)
    setAbout(false)
    setProjects(false)
    setContact(true)
    setResume(false)
   }
   if(value=='resume'){
    setHome(false)
    setAbout(false)
    setProjects(false)
    setContact(false)
    setResume(true)
   }
  }
  return (
    <>
        <nav className='headerNav'>
     <div className="left">
      <h2>Rajkumar</h2>
     </div>
     <div className="right">
      <ul onClick={(e)=>(handleChange(e))}>
       <li onClick={ScrolltoHome} style={{color:home?"var(--yellow)":"" }}>Home</li>
        <li onClick={ScrolltoAbout}  style={{color:about?"var(--yellow)":"" }}>About</li>
       <li onClick={ScrolltoProjects}  style={{color:projects?"var(--yellow)":"" }}>Projects</li>
       <li onClick={ScrolltoResume} style={{color:resume?"var(--yellow)":"" }}>Resume</li>
        <li onClick={ScrolltoContact} style={{color:contact?"var(--yellow)":"" }}>Contact</li>
      </ul>
      <div className="hami-icon">
      <RxHamburgerMenu className='hami' value={showItems} onClick={handleShow} />
      </div>
     </div>
    </nav>
   {showItems &&  <div className="showItems">
    <ul onClick={(e)=>(handleChange(e))}>
       <li onClick={ScrolltoHome} style={{color:home?"var(--yellow)":"" }}>Home</li>
        <li onClick={ScrolltoAbout}  style={{color:about?"var(--yellow)":"" }}>About</li>
       <li onClick={ScrolltoProjects}  style={{color:projects?"var(--yellow)":"" }}>Projects</li>
       <li onClick={ScrolltoResume} style={{color:resume?"var(--yellow)":"" }}>Resume</li>
        <li onClick={ScrolltoContact} style={{color:contact?"var(--yellow)":"" }}>Contact</li>
      </ul>
    </div>}
    </>

  
  )
}
