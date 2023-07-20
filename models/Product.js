const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	price: Number,
	// categoryID: mongoose.SchemaType.ObjectId,
});

module.exports = mongoose.model("Product", productSchema);
