import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import "./footer.css";
import JcraftLogo from "../../files/j-craft-logo.png";



class Footer extends Component{
	state = {
		
	}

	

	

	render(){
		
		return(
			<div>
				<div className="container">
					<div className="row footer">
						<div className="col-md-1">
							<img className="img-responsive footLogo" src={JcraftLogo}></img>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-6 text-center footerLinks">
						
								<a className="footLink" href="/">Home</a>
								<p className="footLink"> | </p>
								<a className="footLink" href="/contact">Contact</a>
								<p className="footLink"> | </p>
								<a className="footLink" href="/shop">Shop</a>
								<p className="TM">™James L. Verbeck II.  All Rights Reserved. </p>
							
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-1">
							<img className="img-responsive footLogo" src={JcraftLogo}></img>
						</div>
					</div>
				</div>
			</div>
			)
	
	
};
};

export default Footer;