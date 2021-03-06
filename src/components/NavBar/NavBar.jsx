import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-link">Welcome, {user.name}</li>
              <li><Link to="/users" className="nav-link">Users</Link></li>
              <Link to='' className='nav-link' onClick={handleLogout}>LOG OUT</Link>
              <li><Link to="/entries" className="nav-link">View Posts</Link></li>
              <li><Link to="/draft" className="nav-link">Draft your Masterpiece</Link></li>
              <li className="nav-search-bar">
                <input type="text"/>
                <button type="button" to="/entries">Search</button>
              </li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
