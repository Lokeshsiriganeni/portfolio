
import {useState} from 'react'
import './index.css'

const Header = ({onButtonClick}) => {
  return (
    <nav className="header-style">
       <p>Lokesh Siriganeni</p>
      <div className="nav-section">
         <a href = '#about'>About</a> 
         <a href="#projects">Project</a> 
       
        <a href = '#contacts'>
          contacts
        </a>
      </div>
    </nav>
  )
}


export default Header