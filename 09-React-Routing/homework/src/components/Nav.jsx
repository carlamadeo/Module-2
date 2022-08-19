import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logoHenry.png'
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to='/' className={({isActive}) => (isActive ? "active-style" : 'non-active')}>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </NavLink>
      <NavLink to='/about' className={({isActive}) => (isActive ? "active-style" : 'non-active')}>
        <span>About</span>
      </NavLink>
        <SearchBar 
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
