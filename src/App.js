// import logo from './logo.svg';
// import './App.css';

import React, { createContext, useState} from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Searchjob from "./Components/Searchjob"
import Footter from "./Components/Footter";
import WindowScroll from "./Components/WindowScroll";
import AdvanceSearch from "./Components/AdvanceSearch";
import Employers from "./Components/Employer";
import EmployerLogin from "./Components/EmployerLogin";
// import Post from "./Components/Post";
import FindJob from "./Components/FindJob";
// import Side from "./Components/Side";
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SingleJobs from "./Components/SingleJobs";
import ApplyJobs from "./Components/ApplyJobs";
import Searchview from "./Components/Searchview";


  export const context = createContext({})

function App() {
  const[id ,setId] = useState()
  const [search, setSearch]= useState("")
  const [ isLogged, setisLogged] = useState(false)
  const [findJob, setFindJob] = useState([]);
  const[searchResults, setSearchResults]=useState([])
  const [ singleJobs , setSingleJobs] = useState({})
  
  return (
    <div className="App">
      
    <context.Provider value={{id,setId,search,setSearch,isLogged, setisLogged ,findJob, setFindJob,searchResults, setSearchResults,singleJobs , setSingleJobs}}>

        <BrowserRouter>
        <Header />
          <WindowScroll/>
        <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/about' element= {<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Searchjob" element={<Searchjob/>}/>
        {/* <Route path ="/Post" element={<Post/>}/> */}
        <Route path ="/Employers" element={<Employers/>}/>
        <Route path ="/EmployerLogin" element={<EmployerLogin/>}/>
        <Route path="/companyInquire" element={<companyInquire/>}/>
        <Route path="/FindJob" element={<FindJob/>}/>
        <Route path="/Single-Jobs" element={<SingleJobs/>}/>
        <Route path="/ApplyJobs" element={<ApplyJobs/>}/>
          <Route path="/AdvanceSaerch" element={<AdvanceSearch/>}/>
          <Route path="/Searchview" element={<Searchview/>}/>
          
        
        </Routes>
          
        <Footter/>
        </BrowserRouter>
    </context.Provider>
     
    </div>

 

    
  );
}

export default App;
