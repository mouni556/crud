import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <Link  className="nav-link  m-3" to='/'>Home</Link>
        <Link  className="nav-link  m-3" to='/create'>Create</Link>
        <Link  className="nav-link  m-3" to='/update'>Update</Link> 
      </nav>

      
    </>
  );
}

export default Header;
