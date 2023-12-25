// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footter from "./Components/Footter";

import { BrowserRouter , Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
        <Header />

        <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/about' element= {<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footter/>
        </BrowserRouter>
     
    </div>

 

    
  );
}

export default App;
