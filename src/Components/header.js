// src/components/Header.js

import React from 'react';
import '../css/Header.css';
import logo from '../assets/loghi/logo.jpeg';
import { Link, useLocation } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";



const Header = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="header">
      <div className="logo">
        <img className='logoEon' src={logo} alt="Logo" />
      </div>
      {!isLoginPage &&
        <div className='navigation-tab'>
          <a className='a' href="/carreamarcovini.github.io/">Home</a>
        </div>
      }
      {!isLoginPage &&
        <div className='navigation-tab'>
          <a className='a' href="/carreamarcovini.github.io/catalog">Catalogo Vini</a>
        </div>
      }
      {!isLoginPage &&
        <div className='navigation-tab'>
          <a className='a' href="/carreamarcovini.github.io/product">La nostra cantina</a>
        </div>
      }
      {!isLoginPage &&
        <div className='navigation-tab'>
          <a className='a' href="/carreamarcovini.github.io/contatti">Contatti</a>
        </div>
      }
      {/* {!isLoginPage &&
        <div className='profile'>
          <Link to='/profile'>
            <CgProfile className='icona'></CgProfile>
          </Link>
        </div>
      } */}
    </header>
  );
};


export default Header;
