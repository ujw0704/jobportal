import React ,{useContext}from 'react'
 import "./Help.css"
 import { Link} from 'react-router-dom'
 import { context} from "../App"
function Helpcenter() {
    const {isShown, setIsShown} = useContext(context);
   

    function handleSubmit(){
        setIsShown((current => !current))
       
    }

  return (
      <div className='helpcontainer'>
        <div className='helpbox'>

     <button  className ="Helpbutton"onClick={handleSubmit}>Need Help</button>
     <div className={isShown ? 'display-block' : 'display-none'}>
        <h2>
            Need Help? Contact Us!
            <ul>
                <li>
                    <Link to ="/contact">contact</Link><br></br>
                </li>
               
                <li>
                    <Link to ="/contact">Company Inquire</Link>
                </li>
            </ul>

        </h2>
      </div>
    </div>
    </div>
  )
}

export default Helpcenter