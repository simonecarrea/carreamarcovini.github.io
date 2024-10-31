import React, { useState } from 'react';
import '../css/Header.css';
import logo from '../assets/loghi/logo.jpeg';
import { Link, useLocation } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      {<div className="logo">
        <img className='logoEon' src={logo} alt="Logo" />
      </div>}
      
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-list ${menuOpen ? 'open' : ''}`}>
        {!isLoginPage && (
          <>
            <Link className='a' to="/" onClick={toggleMenu}>Home</Link>
            <Link className='a' to="/catalogoVini" onClick={toggleMenu}>Catalogo Vini</Link>
            <Link className='a' to="/catalogoBirre" onClick={toggleMenu}>Catalogo Birre</Link>
            <Link className='a' to="/product" onClick={toggleMenu}>La nostra cantina</Link>
            <Link className='a' to="/contatti" onClick={toggleMenu}>Contatti</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
