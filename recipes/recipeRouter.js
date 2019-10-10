//import express
const express = require('express');

//create a router
const recipeRouter = express.Router();

//import the database files
const recipeDB = require('./recipeModel.js');

/***********************************END POINTS*****************************/

recipeRouter.get('/', (req, res) => {
    res.send(<h1>Hellooooooooooo</h1>);
})

recipeRouter.get('/:id/shoppinglist', (req, res) => {

})

recipeRouter.get('/:id/instructions', (req, res) => {

})


//export router
module.exports = recipeRouter;