import React from 'react'
import Home from '../pages/Home'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

function App() {
 
  
  
  return (
    <div>
   <Navbar/>
   
    <Routes>
    
      <Route path='/' element={<Home/>}/>

      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
   
    </div>
  )
}

export default App