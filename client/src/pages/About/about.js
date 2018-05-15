import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import JBoat from "../../files/J-Boat.jpeg";
import "./about.css";



class About extends Component {
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
						<div className="col-md-5 imageDiv">
							<img id="image" src={JBoat} className="img-responsive img-circle"></img>
						</div>

						<div className="col-md-7 bigTextDiv">
							<h2 className="bigText">That wood done slapped me up side the head..<span id ="bigLittleText">So I chainsawed it and turnt it inta a big ol' chair!</span></h2>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8 smallTextDiv">
							<p id="smallText">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
						</div>

						<div className="col-md-2"></div>
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

export default About;