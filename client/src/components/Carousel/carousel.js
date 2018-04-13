import React, { Component } from "react";
import API from "../../utils/API";
import WorkBench from "../../files/workBench.jpg";
import Table from "../../files/red-table.jpeg";
import MugHolder from "../../files/coffee-mug-holder.jpeg";
import JcraftLogo from "../../files/j-craft-logo.jpeg";
import CloseBench from "../../files/workbench-close.jpeg";
import Slider from "react-slick";
import "./carousel.css";

class Carousel extends Component {

	componentDidMount(){
		
	};

	render(){
	// slider settings
	const settings = {
      dots: true,
	  infinite: true,
	  speed: 1000,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
      autoplaySpeed: 4000


    };

		return(

			// slider content
			<Slider {...settings}>
			  <div className="container" >
			  	<div className="row">
			  		<div className="col-md-5 imgDiv">
			  			<img src={WorkBench} id="bench" className="img-responsive" />
			  		</div>

			  		<div className="col-md-7 text-center">
			  			<h1>Hand Crafted</h1>
			  			<h2>In The Hills of Appalachia</h2>
			  		</div>
			  	</div>
				</div>

				<div className="container" >
			  	<div className="row">
			  		<div className="col-md-5 imgDiv">
			  			<img src={CloseBench} className="img-responsive" />
			  		</div>

			  		<div className="col-md-7 text-center">
			  			<h1>Hand Crafted</h1>
			  			<h2>In The Hills of Appalachia</h2>
			  		</div>
			  	</div>
				</div>

				<div className="container" >
			  	<div className="row">
			  		<div className="col-md-5 imgDiv">
			  			<img src={JcraftLogo}  className="img-responsive logo" />
			  		</div>

			  		<div className="col-md-7 text-center">
			  			<h1>Hand Crafted</h1>
			  			<h2>In The Hills of Appalachia</h2>
			  		</div>
			  	</div>
				</div>
			  	

			  	
			  
			 
			</Slider>

			);
	};
};

export default Carousel;