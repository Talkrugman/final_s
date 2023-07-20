require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 5001;
const { connectToMyMongoDB } = require('./db.js');
const Singers = require('./Singers.js');

connectToMyMongoDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', require('./routes/usersRoute.js'));
app.use('/products', require('./routes/productsRoute.js'));
app.use('/orders', require('./routes/ordersRoute.js'));

// app.get('/singers', async (req, res) => {
//     const singers = await Singers.find({});
//     res.json(singers);
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


