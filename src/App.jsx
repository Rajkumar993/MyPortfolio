
import './App.css'
import { Header } from './components/Header/Header'

import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import {Resume} from  './components/Resume/Resume'
import {Contact} from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { useRef } from 'react'
function App() {
const ScrollToabt= useRef(null)
const ScrollTohom= useRef(null)
const ScrollTopro= useRef(null)
const ScrollTores= useRef(null)
const ScrollTocon= useRef(null)

function ScrolltoAbout(){
  ScrollToabt.current.scrollIntoView({behavior:'smooth'})
}
function ScrolltoProjects(){
  ScrollTopro.current.scrollIntoView({behavior:'smooth'
  
  
  })
}
function ScrolltoResume(){
  ScrollTores.current.scrollIntoView({behavior:'smooth',
block:'nearest'

  })
}
function ScrolltoContact(){
  ScrollTocon.current.scrollIntoView({behavior:'smooth'})
}
function ScrolltoHome(){
  ScrollTohom.current.scrollIntoView({behavior:'smooth',
  
  })
}
  return (
    <>

   <div className="container">
      <Header ScrolltoAbout={ScrolltoAbout} ScrolltoProjects={ScrolltoProjects} ScrolltoResume={ScrolltoResume} ScrolltoHome={ScrolltoHome} ScrolltoContact={ScrolltoContact}  /> 
       <Home   ScrollTohom={ScrollTohom}/>
       <About  ScrollToabt={ScrollToabt}/>
       <Projects ScrollTopro={ScrollTopro} />
       <Resume ScrollTores={ScrollTores}/>
       <Contact ScrollTocon={ScrollTocon}/>
       <Footer/>
    </div>

    
     
       
    </>
  )
}

export default App
