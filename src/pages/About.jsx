import React from 'react'
import "./about.css"

function About() {
  return (
    <div className='About'>
      <div className='about-items'>
      <div className='about-item1'>
       <h2 className='h2-1'>About Me</h2>
       <p>I am a final year student of <span>B.Tech IT</span> at CSJM University, Kanpur.My strength is <span>Full Stack Development.
       </span> Up untill 6th semester my cpi is 6.94 .</p>
       <h2 className='h2-2'>Career Objective</h2>
       <ul>
        <li>.To secure a challenging position in a reputable organization to expand
 my learnings, knowledge, and skills.</li>
 <li>To secure employment with a reputable company, where I can utilize my
 skills and business studies background to the maximum</li>
       </ul>
       <h2 className='h2-3'>Hobbies</h2>
       <ol>
        <li>Playing Cricket</li>
        <li>Watching Cricket</li>
        <li>Listening music</li>
       </ol>
</div>
      </div>
     
    </div>
  )
}

export default About