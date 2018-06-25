const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const inventorySchema = new Schema({
	itemName: { type: String, required: true },
	itemCategory: { type: String, required: true },
	itemPrice: { type: String, required: true },
	itemDescription: { type: String, required: true },
	inStock: {type: Number, required: true},
	ordered: Number,
	shipped: Number,
	previewImage: { type: String, required: true },
	image1: String,
	image2: String,
	image3: String,
	etsyLink: { type: String, required: true }


});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;