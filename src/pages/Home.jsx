import React from 'react'
import "./home.css";
import MyImage from "./images/MyPhoto.png"
import resume from "./resume.pdf"


function Home(props) {


  return (
    
    
    <div className='Home'>
 
        <div className='heading'>
            <div className='heading-names'>
            <h2>Full Stack Developer</h2>
           <h1>I'm <span>Vishvesh Pandey</span></h1>
            </div>
          
           
           <div className='heading-buttons'>
            <a href={resume} download="Resume" target='_blank' rel='noreferrer'><button className='button1'>DOWNLOAD RESUME &nbsp; &nbsp; &#8594;</button></a>
          <button className='button2' onClick={() => window.location = 'mailto:vishvesh2590@gmail.com'}>HIRE ME &nbsp; &nbsp; &#8594;</button>
           </div>
        </div>
        <div className='image'>
      
       
      <img src={MyImage} alt='' />
        </div>
       
    </div>
    
  )
}

export default Home