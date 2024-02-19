import React ,{useState}from 'react'
import "./Register.css"
import axios from "axios"
function Register() {
  const [formData,setFormData] =useState({
    username :"",email:"",number:"" ,password:""
  
  })
  
  function handleChange(event){
    setFormData(prevFormData=>{
      return{...prevFormData,[event.target.name]: event.target.value }
      })
  }
  
   const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("your submitted the form" ,formData)
    // console.log(formData)
    // console.log("hello")
    
    axios.post('http://localhost:8000/register', formData)
    .then((response) => {
      console.log('Response from server:', response.data.massage)
    })
    
   }
   localStorage.setItem("name","ujwal")
  
  
  
   
    return (
      <div className='register'>
          <form  className="registerdata"onSubmit={handleSubmit} >
  
             <div className='register'>
              <h2 className='heder-register'>Register Here</h2>
              <div className='register'>
  
            <input type='text' name='username' placeholder='enter your username' value={formData.username} required onChange={handleChange}/>
            <label  className="labelregister"htmlFor="Username">Username</label>
              </div>
               
            <div  className='register'> 
  
            <input type='text' name='name' placeholder='enter your name' value={formData.name} required onChange={handleChange}/>
            <label htmlFor="Name">Name</label>
            </div>
            <div className='register'>
  
            <input type='email' name="email"placeholder='enter your email'value={formData.email} required onChange={handleChange}/>
            <label htmlFor='email'>Email</label>
            </div>
            <div className='register'>
  
            <input type='number' name ="number"placeholder='enter your number'value={formData.number} required onChange={handleChange}/>
            <label htmlFor='number'>Number</label>
            </div>
            <div className='register'>
  
          <input type='password'  name ="password"placeholder='password'value={formData.password} required onChange={handleChange}/>
           <label htmlFor='password'>passsword</label>
           </div>
            </div>
            <button  className='registerbutton' type= 'submit'>submit</button>
          </form>
      </div>
    )
  }

export default Register