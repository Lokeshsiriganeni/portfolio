import {Link} from 'react-router-dom'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const logoutClicked = () => {
  
  }

  return (
    <nav className="header-style">
     
       <p>Lokesh Siriganeni</p>
    
      <div className="nav-container-lg">
       
         <p>About</p>
      
         <p>Project</p> 
       
        <p className="" onClick={logoutClicked}>
          contacts
        </p>
      </div>

      <div className="nav-container-sm">
       
          <AiFillHome fill="white" className="sm-nav-icon" />
     
          <BsBriefcaseFill fill="white" className="sm-nav-icon" />
    
        <FiLogOut
          fill="white"
          className="sm-nav-icon"
          onClick={logoutClicked}
        />
      </div>
    </nav>
  )
}

export default Header