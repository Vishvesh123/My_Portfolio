import React from 'react'
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import react from "./images/react.png"
import nodejs from "./images/nodejs.png"
import mongodb from "./images/mongodb.png"
import "./skills.css"

function Skills() {
  return (
    <div className='Skills'>
        <div className='skills-items'>
            <div className='skill'>
                <img src={html} alt=''/>
               
            </div>
            <div className='skill'>
                <img src={css} alt=''/>
            </div>
            <div className='skill'>
                <img src={js} alt='' id="jsimg"/>
            </div>
</div>
<div className='skills-items' id='item2'>
            <div className='skill'>
                <img src={react} alt=''/>
            </div>
            <div className='skill'>
                <img src={nodejs} alt=''/>
            </div>
            <div className='skill'>
                <img src={mongodb} alt=''/>
            </div>
            
            

        </div>
    </div>
  )
}

export default Skills