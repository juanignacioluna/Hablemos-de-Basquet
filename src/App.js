import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';

import './App.css';
import Particles from 'react-particles-js';

function App() {

  return (

      <BrowserRouter>

        <div class="App">

             
            <Particles
              canvasClassName="particless"
              params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#343a40"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 5,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#343a40",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "retina_detect": true
            }} 
            /> 


          <NavBar />

          <Redirect
            from="/"
            to="/home" />

          <Switch>

            <Route
              path="/home"
              component={Home} />

            <Route
              path="/about"
              component={About} />

            <Route
              path="/blog"
              component={Blog} />

          </Switch>

        </div>

      </BrowserRouter>


  );
}

export default App;
