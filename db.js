const mongoose = require('mongoose');

const mongoUser = process.env.MONGO_ATLAS_USER;
const mongoPass = process.env.MONGO_ATLAS_PASS;
const mongoHost = process.env.MONGO_ATLAS_HOST;
const mongoDB = 'classDemo';

const mongoUrl = ['mongodb+srv://',
    `${mongoUser}:${mongoPass}@${mongoHost}/${mongoDB}`,
    '?retryWrites=true&w=majority',
].join('');


function connectToMongo() {
    mongoose.connect(mongoUrl);
}

module.exports = { connectToMongo };

