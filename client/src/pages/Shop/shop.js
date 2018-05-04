import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";



class Shop extends Component {
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
						<div className="col-md-12">
							<Footer />
						</div>
					</div>
				</div>
			</div>
			);
	}
};

export default Shop;