import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import "./EmployerLogin.css"
function EmployerLogin() {
    
    const navigate = useNavigate();
    let[LoginData,setLoginData] =useState({
        name:"", password:"", role:"", number:"" ,  email:""
        
        
    })
    function handleSubmit(){
        console.log(LoginData)
        navigate("/Login")
      
        
    }
    function HandleChange(event){
        setLoginData({...LoginData,[event.target.name]: event.target.value
        })
    }
    return (
        <div className='Employer-login'>
        <form onSubmit={handleSubmit} >
        <label htmlFor="Company Name">Company Name:</label>
    <input type='text' placeholder=' eg: Amazon & CarrenZen' value={LoginData.name} id="name" name="name"  autoComplete ="off"required onChange={HandleChange}></input>
    <label htmlFor="Role">Role:</label>
    <input type="text" id='role' name='role' placeholder='Enter your role' value={LoginData.role} autoComplete ="off" required onChange={HandleChange}></input>
    <label htmlFor="Mobile">Mobile:</label>
    <input type="number" id='number' name='number'  placeholder='Enter your Number' value={LoginData.number} required onChange={HandleChange}></input>
    <label htmlFor="Password">Password:</label>
    
    <input type="password" id='password' name='password'  placeholder='Enter your password' value={LoginData.password} autoComplete ="off"required onChange={HandleChange}></input>
    <label htmlFor="Email">Email:</label>
    
    <input type="email" id='email' name='email'  placeholder='Enter your Email' value={LoginData.email} autoComplete ="off"required onChange={HandleChange}></input>
       <button className='employerbtn' type='submit'>submit</button>
       <ul  className='employe'>
        <li>

        Don't have an account? <Link to="/Login">Login!</Link>
        </li>

       </ul>
       {/* <ul className='employe'>
      <li>

       
       Don't have an account? <Link to="/register">Sign Up!</Link>
      </li>
       </ul> */}
        </form>

    </div>
  )
}

export default EmployerLogin