const mongoose = require('mongoose');

const singerSchema = new mongoose.Schema({
    fnam: String,
    lname: String,
    age: Number,
});

module.exports = mongoose.model("Singers", singerSchema);