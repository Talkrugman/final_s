const express = require('express');
const productsRouter = express.Router();
const db = require('../db.js');

productsRouter.get('/', async (req, res) => {
    const allProducts = await db.getAllProducts(); 
    res.json(allProducts);
});

productsRouter.get('/', async (req, res) => {
    try {
        const allProducts = await db.getAllProducts();
        res.json(allProducts); //נקבל את כל הרשומות מקובץ פרודקט locallhost:5000/products אם נזין בדפדפן   
    }
    catch (err) {
        res.status(500).send('server error');
        console.error(err);
    }
});

productsRouter.get('/:id', async (req, res) => {
    try {
        const productId = Number(req.params.id);
        const allProducts = await db.getProductById(productId);
        res.json(allProducts); //נקבל את כל רשומה עם ת.ז 3 מקובץ פרודקט http://localhost:5000/products/3 אם נזין בדפדפן   
    }
    catch (err) {
        res.status(500).send('server error');
        console.error(err);
    }
});

productsRouter.post('/new', async (req, res) => { // כדי להזין רשומה חדשה
    try {
        // console.log(req.body); // הדפסה של הבודי רק לצורך הבדיקה - אחרי הבדיקה שחר הבין שחזר מידלוור באינדקס
        const { // באמצעות דיסטראקשר
            name,
            price,
            CategoryId,
            description,
        } = req.body;

        // console.log({name, price, CategoryId, description}); // לצורך הבדיקה בלבד
        res.send('ok');
    }
    catch (err) {
        res.status(500).send('server error');
        console.error(err);
    }
});

productsRouter.patch('/:id', async (req, res) => {
    try {
        // const productId = Number(req.params.id);
        // const allProducts = await db.getProductById(productId);
        // res.json(allProducts); //נקבל את כל רשומה עם ת.ז 3 מקובץ פרודקט http://localhost:5000/products/3 אם נזין בדפדפן   
    }
    catch (err) {
        res.status(500).send('server error');
        console.error(err);
    }
});

productsRouter.delete('/:id', async (req, res) => {
    try {
        // const productId = Number(req.params.id);
        // const allProducts = await db.getProductById(productId);
        // res.json(allProducts); //נקבל את כל רשומה עם ת.ז 3 מקובץ פרודקט http://localhost:5000/products/3 אם נזין בדפדפן   
    }
    catch (err) {
        res.status(500).send('server error');
        console.error(err);
    }
});

module.exports = productsRouter;