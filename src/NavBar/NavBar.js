import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from'./logo.jpg';

function NavBar(){

    return (
      <div className="NavBar">


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            Hablemos de Basquet
            <img class="logo" src={logo}></img>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/home" className="nav-link">Inicio</Link>
              </li>
              <li class="nav-item active">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li class="nav-item active">
                <Link to="/about" className="nav-link">Sobre nosotros</Link>
              </li>
            </ul>
          </div>
        </nav>


      </div>
    );

}

export default NavBar;
