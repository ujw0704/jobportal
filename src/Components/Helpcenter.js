import React ,{useState}from 'react'
 import "./Help.css"
 import {Link} from "react-browser-router"
function Helpcenter() {
    const [isShown, setIsShown] = useState(true);


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
                    <Link to ="/contact">contact</Link>
                </li>

                <li>
                    <Link to ="/contact">contact</Link>
                </li>
            </ul>

        </h2>
      </div>
    </div>
    </div>
  )
}

export default Helpcenter