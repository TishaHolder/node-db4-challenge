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

recipeRouter.get('/:id', validateRecipeId, (req, res) => {

    const { id } = req.params;

    recipeDB.getRecipesById(id)
    .then(recipe => {


        res.status(200).json(recipe);

    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error retrieving the recipe from the database.'});
    })

})

recipeRouter.get('/:id/shoppinglist', validateRecipeId, (req, res) => {

    const { id } = req.params;

    recipeDB.getShoppingList(id)
    .then(shoppingList => {
        res.status(200).json(shoppingList);
    })
    .catch(error => {
        console.log("shopping list error", error);
        res.status(500).json({ error: 'There was an error retrieving the shopping list from the database.'});
    })


})

recipeRouter.get('/:id/instructions', validateRecipeId, (req, res) => {

    const { id } = req.params;

    recipeDB.getInstructions(id)
    .then(instructions => {
        res.status(200).json(instructions);
    })
    .catch(error => {
        console.log("instructions error", error);
        res.status(500).json({ error: 'There was an error retrieving the instructions from the database.'});
    })

})

//custom/local middleware
function validateRecipeId(req, res, next){

    const {id} = req.params;

    recipeDB.getRecipesById(id)
    .then(recipe => {
        if(recipe){
            next();
        }
        else {
            res.status(404).json( {message: 'A recipe with that id does not exist.'} );
        }
    })
    

};

//export router
module.exports = recipeRouter;