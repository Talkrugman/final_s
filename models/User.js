const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	price: Number,
    email: String,
    phone: String,
});

module.exports = mongoose.model("Users", userSchema);
