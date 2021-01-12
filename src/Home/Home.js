import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from'./logo.jpg';

import Footer from '../Footer/Footer';


import './Home.css';


function Home(){

    return (

      <div className="Home">

	    <div class="container-fluid">
	    	<div class="row justify-content-center">
	    		<div class="col-lg-8 col-md-10 col-12">

	    			<br/>

	    			<h1 class="display-4 titulo"><img class="logoo" src={logo}></img>Hablemos de Basquet</h1>
	    			
	    			<br/>

					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					  <ol class="carousel-indicators">
					    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					  </ol>
					  <div class="carousel-inner">
					    <div class="carousel-item active">
					      <img src="https://www.mundodeportivo.com/r/GODO/MD/p7/Baloncesto/Imagenes/2020/10/12/Recortada/e7c986c1cadf40ee8f070bc47147b8f6-kmmC-U483996237651KtG-980x554@MundoDeportivo-Web.jpg" class="d-block w-100" />
					    </div>
					    <div class="carousel-item">
					      <img src="https://basquetplus.com/sites/default/files/main/articles/larry%20bird.jpg" class="d-block w-100" />
					    </div>
					    <div class="carousel-item">
					      <img src="https://cflvdg.avoz.es/default/2020/01/30/00121580420822910843681/Foto/E_100227-074604.jpg" class="d-block w-100" />
					    </div>
					  </div>
					  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>

					<br/><br/>

					<div class="card text-white bg-danger mb-3">
					  <div class="card-header">
					    💪🏀❤
					  </div>
					  <div class="card-body">
					    <blockquote class="blockquote mb-0">
					      <p>"El baloncesto es mi esposa. Exige lealtad y responsabilidad, y me devuelve realización y paz."</p>
					      <footer class="blockquote-footer text-white">Michael Jordan en <cite title="Source Title">Time</cite></footer>
					    </blockquote>
					  </div>

					</div>

					<br/><br/>

					<div class="card text-center text-white bg-primary mb-3">
					  <div class="card-header">
					    BLOG
					  </div>
					  <div class="card-body">
					    <h5 class="card-title">Visita los ultimos posteos de nuestro blog</h5>
					    <Link to="/blog" className="navbar-brand">
					    	<button class="btn btn-danger">Ir al Blog</button>
					    </Link>
					  </div>
					</div>

	    		</div>
	    	</div>

	    	<Footer/>

	    </div>

			

      </div>


    );

}

export default Home;
