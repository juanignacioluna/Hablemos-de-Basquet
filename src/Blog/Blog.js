import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Blog.css';

import Footer from '../Footer/Footer';

function Blog(props){


	const [posteos, setPosteos] = useState([])


	useEffect(() => {

		fetch('https://www.instagram.com/hablemosdebasquet/?__a=1')
			.then(response => response.json())
			.then(data => {

				console.log(data.graphql.user.edge_owner_to_timeline_media.edges)

				setPosteos(data.graphql.user.edge_owner_to_timeline_media.edges)

			})
  
  }, []);

    return (

      <div className="Blog">


	    <div class="container-fluid">

			<div class="row justify-content-center">
				<div class="col-12 info">
					<br/>
					<h1>Últimos posteos del blog</h1>
					<br/><br/>
				</div>
			</div>

	    	<div class="row justify-content-center">

				{posteos.map((posteo, index) => (

		    		<div class="col-lg-4 col-md-6 col-12 info posteo" key={posteo.node.id}>


		    			<a href={"https://www.instagram.com/p/"+posteo.node.shortcode}>
							<div class="card">
							  <img src={posteo.node.display_url} class="card-img-top" />
							  <div class="card-body">
							    <p class="card-text posteoTexto">{posteo.node.edge_media_to_caption.edges[0].node.text}</p>
							  </div>
							</div>
						</a>

		    		</div>

				))}
	    		
	    	</div>

	    	<Footer/>

	    </div>




      </div>


    );

}

export default Blog;
