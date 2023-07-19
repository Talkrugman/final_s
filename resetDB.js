require('dotenv').config();
const mongoose = require('mongoose');
const { connectToMyMongoDB } = require('./db.js');
const Singers = require('./Singers.js');

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
    await deleteAllSingers();

    await Promise.all([
        insertSimgers('nisim', 'cohen', 42),
        insertSimgers('shlomo', 'levi', 13),
        insertSimgers('david', 'israel', 99),
    ]);

    console.log('singers inserted');
}

async function insertSimgers(fname, lname, age) {
    const singers = await Singers.create({ fname, lname, age });
    console.log(`singer saved:\n${singers}`);
}

async function deleteAllSingers() {
    await Singers.deleteMany({});
    console.log('deletion complete');
}


