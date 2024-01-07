import React ,{useState} from 'react'
import { Link } from 'react-browser-router'
function EmployerLogin() {
    let[LoginData,setLoginData] =useState({
        name:"", password:"", role:"", number:"" ,  email:""
       
    
    })
 function handleSubmit(){
    console.log(LoginData)

 }
 function HandleChange(event){
    setLoginData({...LoginData,[event.target.name]: event.target.value
        })
 }
  return (
    <div>
        <form onSubmit={handleSubmit} >
        Don't have an account? <Link to="/Login">Login!</Link>
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
       <button type='submit'>submit</button>
       Don't have an account? <Link to="/register">Sign Up!</Link>
        </form>

    </div>
  )
}

export default EmployerLogin