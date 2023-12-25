import React ,{useState}from "react"
import "./Contact.css"
function Contact(){
const [form ,setFormData] = useState({
    Name :"",Email: "", textarea:""

})
const handleChange= (e) => {
    
    setFormData({...form,[e.target.name]:e.target.value})
    }
 const  handleSubmit =(e)=>{
 e.preventDefault()
 }



return(
    <div className="contact">
    <form className="formContact" onSubmit ={handleSubmit}>
    <h1>Contact</h1>
    <label htmlFor="username">Name:</label>
    <input type="text" id="username" Name="Name" value={form.Name} placeholder="Enter your Name" required onChange={handleChange}></input>
    <label htmlFor="Email">Email:</label>
    <input type="text" name="Email" id="email" placeholder="Enter your Email" value={form.Email} required onChange={handleChange}/>
    <label htmlFor="Comment">comment:</label>
    <textarea type ="textarea" id="textarea" name="textarea" placeholder="Enter your Text" value={form.textarea} required onChange={handleChange}></textarea>
     <div className="conatctbtn">

    <button type="submit">Submit</button>
     </div>
    </form>

    
    


        </div>
)
}


export default Contact;