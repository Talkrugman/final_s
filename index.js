const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/may', (req, res) => {
    res.send('hi may full stack course!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});