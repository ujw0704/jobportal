import React from 'react'
 import "./Footer.css"
 import { Link } from 'react-browser-router'
function Footter() {
  return (
    <div className='footer'>
     
<ul>

      
      <li>
            <Link to="/about">About-Us</Link>
          </li>
    
          <li>
            <Link to="/contact">Contact-Us</Link>
          </li>

          <li>
            <Link to="/term&condition">Term&Condition</Link>
          </li>
          <li>
            <Link to="/Searchjob">Follow Us</Link>
          </li>
          <li>
            <Link to="/help center"> Helpcenter</Link>
          </li>
</ul>
    
    </div>
  )
}

export default Footter
 
       
        
   
  