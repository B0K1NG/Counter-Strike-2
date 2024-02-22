import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  Logo  from '../assets/images/CS2-logo.png'
import "../styles/Navbar.css";
import "../styles/NavbarMediaQueries.css";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <Link to="/" className='logo'>
        <img src={ Logo } alt="CS2-Logo" /></Link>
        <div className="menu" onClick={ () => {
            setMenuOpen(!menuOpen);
        } }>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={ menuOpen ? "open" : "" }>
            <li>
                <NavLink to={ '/updates' }>Updates</NavLink>
                </li>
            <li>
                <NavLink to={ '/news' }>News</NavLink>
            </li>
            <li>
                <NavLink to={ '/livestreams' }>Livestreams</NavLink>
                </li>
        </ul>
    </nav>
  )
}

export default Navbar
