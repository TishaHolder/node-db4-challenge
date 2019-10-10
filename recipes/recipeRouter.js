//import express
const express = require('express');

//create a router
const recipeRouter = express.Router();

//import the database files
const recipeDB = require('./recipeModel.js');

/***********************************END POINTS*****************************/

recipeRouter.get('/', (req, res) => {

    recipeDB.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error retrieving the recipes from the database.'});
    })
    
})

recipeRouter.get('/:id', (req, res) => {

    const { id } = req.params;

    recipeDB.getRecipesById(id)
    .then(recipe => {
        res.status(200).json(recipe);

    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error retrieving the recipe from the database.'});
    })

})

recipeRouter.get('/:id/shoppinglist', (req, res) => {

})

recipeRouter.get('/:id/instructions', (req, res) => {

})


//export router
module.exports = recipeRouter;