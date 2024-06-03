import React, { useState } from 'react'
import './Projects.css'

import video from '../Assests/Trendy Togs.mp4'
import video2 from '../Assests/sneakers.mp4#t=10,25'
import CurrencyConverter from '../Assests/media/CurrencyConverter.mp4'
import BmiCalculator from '../Assests/media/bmi.mp4'
import AutoComplete from '../Assests/media/Autocomplete.mp4'
import Filter from '../Assests/media/filter.mp4'
import Income from '../Assests/media/iincome.mp4'
import ProfileCard from '../Assests/media/ProfileCard.mp4'
import CssGenerator from '../Assests/media/re2.mp4'
import PizzaHut from '../Assests/media/re3.mp4'
import Weather from '../Assests/media/WEATHER.mp4'
import password from '../Assests/media/StrongPassword.mp4'
import FormVAlidation from '../Assests/media/Formvalidation.mp4'
export const Projects = ({ScrollTopro}) => {
  const [projects,setProjets]=useState([{
      id:1,
     name:'project1',
     videoSrc:video ,
     des:" Check Out My New Project. Trendy-Togs Ecommerce Website Built Using React.js",
     link:"https://rajkumar993.github.io/Trendy-Togs/"
  }, {
    id:2,
    name:'project1',
    videoSrc:video2 ,
    des:"Check Out My New Project. Sneakers-Only Ecommerce Website Built Using Vannila Javascript",
    link:"https://sneakersonly-60028858391.development.catalystserverless.in/app/index.html#nav"
 },
 
])
const [miniProjects,setMiniProjects]=useState([
  {
  id:3,
  name:"project2",
  videoSrc:CurrencyConverter,
  des:'API Project- Currency Converter Built Using React.js'
},
{
  id:4,
  name:"project2",
  videoSrc:BmiCalculator,
  des:'BMI Calculator Built Using React.js'
},
{
  id:5,
  name:"project2",
  videoSrc:AutoComplete,
  des:'AutoComplete Built Using Vannila Javascript And JSON'
},
{
  id:6,
  name:"project2",
  videoSrc:Filter,
  des:'Product Filter Built Using Vannila Javascript And JSON'
},
{
  id:7,
  name:"project2",
  videoSrc:Income,
  des:'Income Expense Tracker Built Using Vannila Javascript'
},
{
  id:8,
  name:"project2",
  videoSrc:ProfileCard,
  des:'Profile Card Built Using React.js'
},
{
  id:9,
  name:"project2",
  videoSrc:CssGenerator,
  des:'CSS Generator Built Using Vannila Javascript'
},
{
  id:10,
  name:"project2",
  videoSrc:PizzaHut,
  des:'Pizza Hut Mini Ecommerce Built Using Vannila Javascript'
},
{
  id:11,
  name:"project2",
  videoSrc:Weather,
  des:'API Project-Weather Tracker Built Using React.js'
},
{
  id:12,
  name:"project2",
  videoSrc:password,
  des:'Strong Password Generator Built Using React.js'
},
{
  id:13,
  name:"project2",
  videoSrc:FormVAlidation,
  des:'Form Validation Built Using React.js'
},
])
  return (
    <div className="Projects" ref={ScrollTopro}>
      
    <div className="projectsTop" >
    <h2>Projects</h2>
    
    </div>

    <div className="projectsBottom">
   
    {projects.map(project=>(
    <div key={project.id} className={project.name}>
    <video src={project.videoSrc} loop autoPlay muted>
  
    </video>
    <p>
    {project.des}
    <a target='_blank' href={project.link}>
    <button>click</button>
    </a>
    </p>
    </div>
    ))}   
    </div>
    <h2 className='mini'>Mini Projects</h2>
    <div className="projectFooter">
     
    {miniProjects.map(miniProject=>(
     <div key={miniProject.id} className={miniProject.name}>
     <video src={miniProject.videoSrc} loop controls autoPlay muted>
     </video>
     <p>{miniProject.des}</p>
     </div>
    
    ))}  
    </div>

    
    </div>
)
}
