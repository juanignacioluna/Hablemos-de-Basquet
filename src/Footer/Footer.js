import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import ig from'./ig.png';
import twitch from'./twitch.png';
import email from'./email.png';

function Footer(){

    return (
      <div className="Footer">

        <div class="row justify-content-center">
          <div class="col-12">

            <div class="footerr">

              <h3>Seguinos en nuestras redes:</h3>

              <a href="https://www.twitch.tv/hdbasquet"><img src={twitch} /></a>
              <a href="mailto:hdbasquet@gmail.com"><img class="email" src={email} /></a>
              <a href="https://www.instagram.com/hablemosdebasquet/"><img src={ig} /></a>

            </div>


          </div>
        </div>


      </div>
    );

}

export default Footer;
