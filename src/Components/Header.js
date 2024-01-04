

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

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className='navs' >
            
            <Nav.Link as={Link} to="/"className='navlink'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Login"className='navlink'>Login</Nav.Link>

            {/* <NavDropdown title="Search" className='navlink'id="basic-nav-dropdown"> */}
            <NavDropdown title={<span className="custom-dropdown-title">Search</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Searchjob" className='navlink'>Searchjob</NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Searchjob" className='navlink'>Searchjob</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about"className='navlink'>About-us</Nav.Link>
            <Nav.Link as={Link} to="/contact"className='navlink'>Contact-us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
