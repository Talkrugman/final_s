require('dotenv').config();
const mongoose = require('mongoose');
const { connectToMongo } = require('./db.js');
const Singer = require('Singer.js');

const { default: mongoose } = require("mongoose");
const { connectToMongo } = require("./db");
const { Await } = require('react-router-dom');

main();

async function main() {
    try {
        connectToMongo();
        await initDB();
        await mongoose.disconnect();
    }
    catch (err) {
        console.log(err);
    }
}

async function initDB() {
    await deleteAllSingers();

    await Promise.all([
        inserSinger('nisim', 'cohen', 42),
        inserSinger('shlomo', 'levi', 13),
        inserSinger('david', 'israel', 99)
    ]);

    console.log('singers inserted');
}

async function inserSinger(fname, lname, age) {
    const singer = await Singer.creat({ fname, lname, age });
    console.log(`singer saved:\n${singer}`);
}

async function deleteAllSingers() {
    await Singer.deleteMany({});
    console.log('deleted');
}