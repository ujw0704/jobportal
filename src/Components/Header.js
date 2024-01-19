

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';

import "./Header.css";

function Header() {
  return (
    <div className='Header'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='logohead'>
          <span className='logo'>kyodai</span>
          
          <span className='logo'>Career</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navlink'/>

        <Navbar.Collapse id="basic-navbar-nav"className='navlink'>
          <Nav  className='navs' >
            
            <Nav.Link as={Link} to="/"className='navlink'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Login"className='navlink'>Login</Nav.Link>
           

            
            <NavDropdown title={<span className="custom-dropdown-title">Search</span>} id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/Searchjob" style={{height:"35px",width:"20px",padding:"3px",marginLeft:"30px",marginBottom:"20px"}}>Searchjob</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item as={Link} to="/Searchjob" style={{height:"35px",width:"20px",padding:"3px",marginLeft:"30px",marginBottom:"20px"}}>Searchjob</NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Searchjob"style={{height:"35px",width:"10px", padding:"3px" ,textAlign:"center", marginLeft:"30px",marginBottom:"20px"}} >Searchjob</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/FindJob"className='navlink'>Find job</Nav.Link>
            
            
            <Nav.Link as={Link} to="/Employers"className='navlink' style={{background:"red", borderRadius:"50px",height:"50px", marginTop:"12px" , width:"120px" , textAlign:"center", padding:"0px"}}>Employer</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
