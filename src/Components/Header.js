


// import { Link } from 'react-router-dom';
// import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
//  import 'bootstrap/dist/css/bootstrap.min.css';
//  import { useContext } from 'react';
//  import { context } from '../App'
// import "./Header.css";

// function Header() {
//   const {search,setSearch,searchFilter,setFilter} = useContext(context)
    
   

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };
 
//   return (
    
  
// <div className='headerContainer'>
  
     

//       <span>

//         kyodai Carrer
//       </span>
      
     
//      <div>
//       <input type='text' placeholder='SEARCH'></input>
//      </div>
//      <div className='homeLink'>
//       <ul>
//         <li>
//           <Link to= "/">Home</Link>
//         </li>
//         <li>
        
//         <Link to ="/Login">Login</Link>
//       </li>
//         <li>
//           <Link to="/Findjob">Findjob</Link>
//         </li>
//         <li>
        
//           <Link to ="/Employers">Employer</Link>
//         </li>

          
//       </ul>
//      </div>
    
  



      
  
//  </div>
//   );
// }

// export default Header;
// Header.js
import axios from "axios"
import React, {  useState,useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../App';
// import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

function Header() {
  const { search, setSearch, searchFilter, setFilter ,isLogged, setisLogged} = useContext(context);
 

 const navigate = useNavigate()
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
      
     navigate("/FindJob")
  };
    
  
//  if(localStorage.getItem("token")){
//   setisLogged(true)
 
//  }else{
//   setisLogged(false)
//  }

  



  useEffect(() => {
    if(!search){
      console.log("searching");
    }else
    
    axios.get(`http://localhost:8000/get-jobs`)
      .then((response) => {
        console.log('Success!', response.data.data);
        setFilter(response.data.data); 
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
      });
  }, [search]);
  
  //

 


  function handlelogout(e){
    e.preventDefault()
    localStorage.removeItem("token")
    setisLogged(false)
    navigate("/")
    // alert(" sucsseful loggin out")
    
  }


  

  return (
    <div className='headerContainer'>
      <span>kyodai Carrer</span>
       <div>
        <input
          type='text'
          placeholder='SEARCH'
          value={search}
          onChange={handleSearchChange}
        />
      </div> 
      <div className='homeLink'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {
      (isLogged)?<button onClick={handlelogout}>logout</button>:<Link to="/Login">Login</Link>

            }
          </li>
          <li>
            <Link to="/Findjob">Findjob</Link>
          </li>
          <li>
            <Link to="/Employers">Employer</Link>
            
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Header;
