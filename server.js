//import express
const express = require('express');

//create express application
const server = express();

//mount global middleware
server.use(express.json());

//import routers
const recipeRouter = require('./recipes/recipeRouter.js');

//mount routers
server.use('/api/recipes', recipeRouter);

//export server
module.exports = server;