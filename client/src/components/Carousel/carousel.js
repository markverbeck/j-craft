import React, { Component } from "react";
import API from "../../utils/API";
import WorkBench from "../../files/workBench.jpg";
import Table from "../../files/red-table.jpeg";
import MugHolder from "../../files/coffee-mug-holder.jpeg";
import JcraftLogo from "../../files/j-craft-logo.png";
import CloseBench from "../../files/workbench-close.jpeg";
import ScrapeTool from "../../files/scrapeTool.jpg";
import Slider from "react-slick";
import "./carousel.css";

class Carousel extends Component {

	

	render(){
	// slider settings


	const settings = {

      dots: true,
      arrows: false,
	  infinite: true,
	  speed: 1000,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
      autoplaySpeed: 4000,
      appendDots: dots =>(
      	 <div
          style={{
            borderRadius: "10px",
            padding: "0px",
            
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
        ),
      customPaging: i => (
        <div
          style={{
            width: "40px",
            color: "black",
            
            
          }}
        >
          <i className="fas fa-sun dot"></i>
        </div>
      )

      


    };
// slider content
		return(
		<div>	
			
			<Slider {...settings}>
			  <div className="container" >
			  	<div className="row">
			  		<div className="col-md-5 imgDiv">
			  			<img src={WorkBench} id="bench" className="img-responsive" />
			  		</div>

			  		<div className="col-md-7 text-center textDiv">
			  			<h1 className="carouselText">Hand Made Craftsmanship</h1>
			  		</div>
			  	</div>
				</div>

				<div className="container" >
			  	<div className="row">
			  		<div className="col-md-5 imgDiv">
			  			<img src={CloseBench} id="closeBench" className="img-responsive" />
			  		</div>

			  		<div className="col-md-7 text-center textDiv">
			  			<h1 className="carouselText">By James L. Verbeck II</h1>
			  		</div>
			  	</div>
				</div>

				<div className="container" >
			  	<div className="row">
			  		<div className="col-md-5 imgDiv">
			  			<img src={ScrapeTool}  className="img-responsive" />
			  		</div>

			  		<div className="col-md-7 text-center textDiv">
			  			<h1 className="carouselText">In The Hills of Appalachia</h1>
			  		</div>
			  	</div>
				</div>

				<div className="container" >
			  	<div className="row">
			  		
			  		<div id="jLogo" className="col-md-12 imgDiv">
			  			<img src={JcraftLogo}  className="img-responsive logo" />
			  		</div>

			  		
			  	</div>
				</div>
			  	
				
			  	
			  
			 
			</Slider>
			


		</div>	
			);
	};
};

export default Carousel;