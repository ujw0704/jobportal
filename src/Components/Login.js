import React, { useState } from 'react';
import "./Login.css";
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios"
import { useContext } from 'react';
import { context } from '../App';


function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
   const {setisLogged} =useContext(context)


  const navigate =useNavigate()


  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
     if (formData.password.length < 6) {
      alert("Password should have at least six characters");
     
      return;
    }

    console.log("You submitted the form", formData);
 

    axios.post('http://localhost:8000/login', formData)
    .then((response) => {
      if (response.data.status=== 200){
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token);}
        formData.username = ""
        formData.password =""
        setisLogged(true)
        navigate("/")
        
      console.log('Response from server:', response.data.massage)
    })
  }

  return (

   

    <div className='input-container'> 
      <section className='section'>
     
     
        </section>
       
      
      <form onSubmit={handleSubmit}>


     
        <h2 className='login-header'>Welcome Back</h2>
        <div className="login"> 
          <input 
            type='text' 
            name="username" 
            id='username' 
            value={formData.username} 
            required 
            onChange={handleChange} 
            />
          <label  className='loginlabel' htmlFor="username" >Username</label>
        </div>
        <div className="login"> 
          <input 
            type={showPassword ? 'text' : 'password'} 
            name='password' 
            id='password' 
            value={formData.password} 
            required 
            onChange={handleChange} 
            />
          <label className='loginlabel' htmlFor='password' >Password</label> 
          <span 
            className="password-toggle" 
            onClick={togglePasswordVisibility}
            >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>
        <button type='submit'>LOGIN</button> 
      <div >
      Don't have an account? <Link to="/register" className='reglink'>Sign Up!</Link>
      </div>
      </form>

    </div>
          
  );
}

export default Login;
