import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './About.css';

import Footer from '../Footer/Footer';

function About(props){

    return (

      <div className="About">


      	

	    <div class="container-fluid">
	    	<div class="row justify-content-center">
	    		<div class="col-md-10 col-12 info">

	    			<br/>

					<div class="jumbotron jumbotron-fluid">
					  <div class="container">

					    <h1 class="display-4">Sobre nosotros</h1>

					    <p class="lead">Hablemos de básquet comenzó como 
					    una lluvia de ideas que los fundadores teníamos y 
					    no sabíamos cómo explayarlas. La mejor manera que 
					    encontramos para describir lo que pensamos sobre 
					    este hermoso deporte, fue crear una página de instagram 
					    para contar y redactar todo lo que nos pasa por nuestra 
					    cabeza en cualquier momento del día y, de esa manera, 
					    formar una comunidad que esté de acuerdo o no, con lo 
					    que escribimos. A medida que pasó el tiempo, fuimos 
					    sumando a amigos, conocidos, colegas que amaban tanto 
					    el deporte como nosotros y así poder sumar nuevas ideas, 
					    nuevos conocimientos, nuevos fundamentos. Somos apasionados 
					    por este deporte, nos gusta el juego, nos gusta el 
					    análisis, nos gusta abrir debates sobre cuestiones técnicas, 
					    siempre y cuando sean con fundamentos. Cada dato que 
					    publicamos tiene una fuente, cada comentario sobre un 
					    jugador es justificado y desde un lado objetivo, cada análisis de los 
					    partidos se basa en fundamentos técnicos del deporte y en lo que 
					    se vio en la cancha. Nosotros creemos que la NBA es la 
					    mejor liga del mundo y que para crecer, tenés que hacerlo 
					    viendo a los mejores. Queremos formar una comunidad que sea 
					    participativa con nosotros en cada dato, cada opinión, 
					    porque de esa manera podemos formar un ambiente que sepa 
					    del deporte y para que Hablemos de Básquet.</p>

					  </div>
					</div>

					


	    		</div>
	    		
	    	</div>

	    	<Footer/>

	    </div>




      </div>


    );

}

export default About;
