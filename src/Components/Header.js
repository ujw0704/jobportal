
 import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../App';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

function Header() {
  const { search, setSearch, searchFilter, setFilter, isLogged, setisLogged } = useContext(context);

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    navigate("/FindJob");
  };

  useEffect(() => {
    if (!search) {
      console.log("searching");
    } else {
      axios.get(`http://localhost:8000/get-jobs`)
        .then((response) => {
          console.log('Success!', response.data.data);
          setFilter(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching job data:', error);
        });
    }
  }, [search]);

  function handlelogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setisLogged(false);
    navigate("/");
  }

  return (
    <div className='headerContainer'>
      <span>kyodai Carrer</span>
      <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={`linksContainer ${showMenu ? 'showMenu' : ''}`}>
        <div className="search">
          <input
            type='text'
            placeholder='SEARCH'
            value={search}
            onChange={handleSearchChange}
          />
          <SearchIcon className='searchicon' />
        </div>
        <div className='homeLink'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {(isLogged) ? <button className="logout" onClick={handlelogout}>logout</button> : <Link to="/Login">Login</Link>}
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
    </div>
  );
}

export default Header;

