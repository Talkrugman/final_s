require('dotenv').config();
const mongoose = require('mongoose');
const { connectToMyMongoDB } = require('./db.js');
const Singers = require('./Singers.js');
const Product = require('./models/Product.js');

main();

async function main() {
    try {
        connectToMyMongoDB();
        await initDB();
        await mongoose.disconnect();
    }
    catch (err) {
        console.error(err);
    }
}

async function initDB() {
    await deleteAll();

    await Promise.all([
        insertSimgers('nisim', 'cohen', 42),
        insertSimgers('shlomo', 'levi', 13),
        insertSimgers('david', 'israel', 99),
        insertProduct('eggs', 99),
        insertProduct('milk', 22),
        insertProduct('bread', 11)
    ]);

    console.log('singers inserted');
}

async function insertSimgers(fname, lname, age) {
    const singers = await Singers.create({ fname, lname, age });
    console.log(`singer saved:\n${singers}`);
}

async function insertProduct(name, price) {
    const product = await Product.create({ name, price });
    console.log(`product saved:\n${product}`);
}

async function deleteAll() {
    await Singers.deleteMany({});
    await Product.deleteMany({});

    console.log('deletion complete');
}


