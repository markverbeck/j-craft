import React, { Component } from "react";
import API from "../../utils/API";
import AdminNav from "../../components/AdminNav";


class AddInv extends Component {
	state = {
		itemName: "",
		itemCategory: "",
		itemPrice: "",
		itemDescription: "",
		inStock: "",
		ordered: "",
		shipped: "",
		previewImage: "",
		image1: "",
		image2: "",
		image3: "",
		etsyLink: ""
	}

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
	};


  render(){
    return(
    	<div>
    		<AdminNav />
    	</div>
      )
  }
}

export default AddInv;