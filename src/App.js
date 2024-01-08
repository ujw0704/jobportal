// import logo from './logo.svg';
// import './App.css';

import React, { createContext} from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Searchjob from "./Components/Searchjob"
import Footter from "./Components/Footter";
import WindowScroll from "./Components/WindowScroll";
// import Helpcenter from "./Components/Helpcenter";
import Employers from "./Components/Employer";
import EmployerLogin from "./Components/EmployerLogin";
// import Side from "./Components/Side";
import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import { HelpCenter } from "@mui/icons-material";
// import companyInquire from "./Components/companyInquire";




  export const context = createContext({})

function App() {
  
  return (
    <div className="App">
    <context.Provider value={{}}>

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
        {/* <Route path ="/Helpcenter" element={<Helpcenter/>}/> */}
        <Route path ="/Employers" element={<Employers/>}/>
        <Route path ="/EmployerLogin" element={<EmployerLogin/>}/>
        <Route path="/companyInquire" element={<companyInquire/>}/>
        </Routes>
          
        <Footter/>
        </BrowserRouter>
    </context.Provider>
     
    </div>

 

    
  );
}

export default App;
