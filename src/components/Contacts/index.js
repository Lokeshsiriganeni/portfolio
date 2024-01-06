
import { FaInstagramSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa6";
import './index.css'

const Contacts =()=>{
   return ( 
    <div id = 'contacts' className = 'contactsContainer'>
       <FaInstagramSquare className = 'icons'/>
       <CgMail className = 'icons'/>
       <FaLinkedin className = 'icons'/>
    </div>
   )
}

export default Contacts