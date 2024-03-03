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
      <div className='register container1' >

          <form  className="registerdata"onSubmit={handleSubmit} >
  
             <div className='register'>
              <h2 className='heder-register'>Register Here</h2>
              <div className='register'>
  
            <label  className="labelregister"htmlFor="Username">Username</label>
            <input type='text' name='username' placeholder='enter your username' value={formData.username} required onChange={handleChange}/>
              </div>
               
            <div  className='register'> 
  
            <label htmlFor="Name">Name</label>
            <input type='text' name='name' placeholder='enter your name' value={formData.name} required onChange={handleChange}/>
            </div>
            <div className='register'>
  
            <label htmlFor='email'>Email</label>
            <input type='email' name="email"placeholder='enter your email'value={formData.email} required onChange={handleChange}/>
            </div>
            <div className='register'>
  
            <label htmlFor='number'>Number</label>
            <input type='number' name ="number"placeholder='enter your number'value={formData.number} required onChange={handleChange}/>
            </div>
            <div className='register'>
  
           <label htmlFor='password'>passsword</label>
          <input type='password'  name ="password"placeholder='password'value={formData.password} required onChange={handleChange}/>
           </div>
            </div>
            <button  className='registerbutton' type= 'submit'>submit</button>
          </form>
      </div>
    )
  }

export default Register