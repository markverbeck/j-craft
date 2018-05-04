import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import "./home.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Table from "../../files/red-table.jpeg";
import Bench from "../../files/workBenchThree.jpeg";
import Mug from "../../files/coffeeMugHolder.jpg";
import Clock from "../../files/clock2.jpeg";
import KeyHolder from "../../files/keyHolder.jpeg";

class Home extends Component{
	state ={}
	


render(){
				
	return(
		<div>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<NavBar />
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-1"></div>
				<div className = "col-md-10">

					<Carousel />
				</div>
				<div className="col-md-1"></div>
			</div>
		</div>

		<div className="container">
			<div className="row">
				
				<div className="col-md-1"></div>
				<div className = "col-md-4 woodMaster">
					<div className="col-md-2">
						<i id="workBucket" className="fas fa-briefcase"></i>
					</div>
					<div className="col-md-10">
						<p className="textOne">Crafted by Central PA's wood master</p>
						<p className="textTwo">James L. Verbeck II</p>
					</div>
				</div>

				<div className="col-md-1"></div>

				<div className="col-md-4 featured">
					<div className="col-md-2">
						<i id="dolly" class="fas fa-dolly"></i>
					</div>
					<div className="col-md-10">
						<p id="feat" className="textOne"><p id="featureText">Featured</p>from the shop.</p>
						
					</div>
				</div>
			</div>
		</div>
		
		<div className="container">
			<div className="row">
				
				<div className="col-md-1"></div>
				<div className = "col-md-4">
					
					<div className="col-md-12 bioSample">
						<img src={Table} id="leftPic" className="img-responsive"></img>
						<p className="textThree text-center">Hello this is the part of your webpage where you will probably share the first few lines of your bio, maybe write something about singing skinimy rinky dinky dink on the back porch while constructing fancy underwear drawer. It will eventually fade away like this .... <a href="/about">Read More..</a></p>
					</div>

			
					
				</div>
				<div className="col-md-1"></div>
				  <div className="col-md-4 featureColumn">
				  	<row>
					<div className="col-md-5 featureSample">
						<a target="_blank" href="https://www.etsy.com/listing/602429165/solid-wood-work-bench-crafting-table?ref=shop_home_active_2">
						<img src={Bench}  className="img-responsive featuredImage"></img>
						</a>
						<div className="f-text text-center">
							<p className="featuredText">Solid Work Bench</p>
							<a target="_blank" className="price" href="https://www.etsy.com/listing/602429165/solid-wood-work-bench-crafting-table?ref=shop_home_active_2">$450</a>
						</div>

					</div>

					<div className="col-md-5 featureSample">
						<a target="_blank" href="https://www.etsy.com/listing/605818683/coffee-mug-holder-coffee-cup-rack-child?ref=listing-shop-header-0">
						<img src={Mug} id="mug"  className="img-responsive "></img>
						</a>
						<div className="f-text text-center">
							<p  className="featuredText">Coffee Mug Holder</p>
							<a target="_blank" className="price" href="https://www.etsy.com/listing/605818683/coffee-mug-holder-coffee-cup-rack-child?ref=listing-shop-header-0">$42.50</a>
						</div>

					</div>
					</row>

					<row>
					<div className="col-md-5 featureSample">
						<a target="_blank" href="https://www.etsy.com/listing/596444956/reclaimed-wood-clock-handmade-wood-clock?ref=listing-shop-header-0">
						<img src={Clock}  className="img-responsive featuredImage"></img>
						</a>
						<div className="f-text text-center">
							<p className="featuredText">Reclaimed Wood Clock</p>
							<a target="_blank" className="price" href="https://www.etsy.com/listing/596444956/reclaimed-wood-clock-handmade-wood-clock?ref=listing-shop-header-0">$180</a>
						</div>

					</div>

					<div className="col-md-5 featureSample">
						<a target="_blank" href="https://www.etsy.com/listing/596188966/coffee-mug-holder-keychain-holder?ref=shop_home_active_2">
						<img src={KeyHolder}  className="img-responsive featuredImage"></img>
						</a>
						<div className="f-text text-center">
							<p className="featuredText">Keychain Holder</p>
							<a className="price" target="_blank" href="https://www.etsy.com/listing/596188966/coffee-mug-holder-keychain-holder?ref=shop_home_active_2">$10</a>
						</div>

					</div>
					</row>
				  </div>
			</div>
		</div>


		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<Footer />
				</div>
			</div>
		</div>
		
		
		
		</div>
		);
};
};

export default Home;