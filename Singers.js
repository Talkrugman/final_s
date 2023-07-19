const mongoose = require('mongoose');

const singersSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	age: Number,
});

module.exports = mongoose.model("Singers", singersSchema);
