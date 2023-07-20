const mongoose = require('mongoose');
const Product = require('./models/Product');

const mongoUser = process.env.MONGO_ATLAS_USER;
const mongoPass = process.env.MONGO_ATLAS_PASS;
const mongoHost = process.env.MONGO_ATLAS_HOST;
const mongoDB = 'pita';

const mongoUrl = [
	'mongodb+srv://',
	`${mongoUser}:${mongoPass}@${mongoHost}/${mongoDB}`,
	'?retryWrites=true&w=majority',
].join('');

function connectToMyMongoDB() {
	mongoose.connect(mongoUrl);
}

async function getAllProducts() {
	return await Product.find({});
}

async function getAllOrders() {
	return [];
}
async function getAllUsers() {
	return [];
}

module.exports = { 
	connectToMyMongoDB,
	getAllOrders,
	getAllProducts,
	getAllUsers
 };
