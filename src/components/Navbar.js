import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  
  
  return (
    <div className='Navbar'>
       <ul>
        <li>
        <NavLink to="/"  className="phone"><i class="fa-solid fa-house"></i></NavLink>
      <NavLink to="/" className="pc">Home</NavLink>
        </li>
        <li>
        <NavLink to='/about'  className="phone"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to='/about' className="pc">About</NavLink>
        </li>
        <li>
        <NavLink to='skills'  className="phone"><i class="fa-solid fa-code"></i></NavLink>
        <NavLink to='skills' className="pc">Skills</NavLink>
        </li>
        
        <li>
        <NavLink to='projects'  className="phone"><i class="fa-solid fa-file"></i></NavLink>
        <NavLink to='projects' className="pc">Projects</NavLink>
        </li>
        <li>
        <NavLink to='contact' className="phone"><i class="fa-solid fa-envelope"></i></NavLink>
        <NavLink to='contact' className="pc">contact</NavLink>
        </li>
       </ul>
    </div>
  )
}

export default Navbar