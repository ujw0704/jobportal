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
      <div className="iframe">

    
    <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14271.467880172038!2d88.19931527634539!3d26.588643818005895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4527c5331f88f%3A0xa2af6841ad280add!2sSalbari%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1704030028624!5m2!1sen!2sin"
          width="600"
          height="350"
          style={{ border: 0, marginRight:"100px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>



        </div>
)
}


export default Contact;