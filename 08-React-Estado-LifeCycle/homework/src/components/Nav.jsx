import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="navbar navbar-dark bg-dark nav-class">
      <img src={Logo} alt="Henry"/>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
