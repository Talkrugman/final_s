require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 5001;
// const mongoose = require('mongoose');
// const { connectToMongo } = require('./db.js');
// const Singer = require('Singer.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/singers', async (req, res) => {
    res.send(process.env.NISIM)
    // const singers = await Singer.find({});
    // res.json(singers);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


