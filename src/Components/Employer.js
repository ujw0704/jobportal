import React from 'react'
 import "./Employer.css"
 
import { Link } from 'react-router-dom'
function Employer() {
  return (
 
    <div className='employee-container'>
      <div className='employerPage'>
        <img src='https://img.freepik.com/free-photo/human-resources-concept-with-man_23-2150389111.jpg?w=740&t=st=1704524208~exp=1704524808~hmac=3859e4689fa208cc05b87005106ed5c02db59da230af6078b05b8dadd36748ee' alt='employee'></img>
        <div className='employercontext'>

      <p>This is the page for employers to post job openings and view candidates.</p>
     
         

     <Link to="/EmployerLogin" className="employer-button">Start hiring</Link>
    
    

        </div>
      
   
      </div>
      </div>
        
            
           
     
  )
}

export default Employer