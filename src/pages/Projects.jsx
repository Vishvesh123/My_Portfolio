import React from 'react'
import "./projects.css";
import chat from "./images/chat.png"
import resume from "./images/resume.png"
import blog from "./images/blog.png"
import typing from "./images/typing.png"

function Projects() {
  return (
    <div className='Project'>
        <div className='project-item'>
          <img src={chat} alt=''/> 
           <img src={blog} alt=''/>
        </div>
        <div className='project-item'>
        <img src={resume} alt=''/>
        <img src={typing} alt=''/>
        </div>
    </div>
  )
}

export default Projects