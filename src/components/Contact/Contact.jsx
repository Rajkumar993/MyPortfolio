import React from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub   } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Contact = ({ScrollTocon}) => {
  return (
   <div className="contact" ref={ScrollTocon}>
    <div className="contactHeading">
      <h2>Contact</h2>
    </div>
    <div className="contactDetails">
      <p><span>Email </span>: kraj73086@gmail.com </p>
      <p><span>Mobile</span>: +91 8610649442 </p>
    </div>
    <div className="contactSocialMedia">
      <p><a target='_blank' href="https://www.linkedin.com/in/rajkumar0304/"><FaLinkedin/></a></p>
      <p><a target='_blank' href="https://github.com/Rajkumar993"><FaGithub/></a></p>
      <p> <a target='_blank' href="https://leetcode.com/u/rajkumarpro0304/"><SiLeetcode/></a></p>
    </div>
   </div>
  )
}
