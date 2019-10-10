//***************DATABASE ACCESS FILE**********/

//import express
const express = require('express');

//import development object
const db = require('../data/dbConfig.js');

//export CRUD methods
module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions

};


//methods to perform CRUD operations
function getRecipes(){
    return db('recipes');

}

function getRecipesById(id){
    return db('recipes')
    .where({ 'recipes.id': id})
    .first();
}

function getShoppingList(id){
    return db('recipes')
    .join('recipe_ingredients', 'recipes.id', '=', ['recipe_ingredients.recipe_id', 'recipe_ingredients.ingredient_id'])
    .join('ingredients', 'ingredients.id', '=', ['recipe_ingredients.recipe_id', 'recipe_ingredients.ingredient_id'])
    .where({ 'recipes.id': id})
    .select('recipes.recipe_name', 'ingredients.name', 'ingredients.quantity');


}

function getInstructions(id){
    return db('recipes')
    .join('instructions', 'recipes.id', '=', 'instructions.recipe_id')
    .where({ 'recipes.id': id })
    .select('instructions.step_number', 'instructions.instruction')
    .orderBy('instructions.step_number');

}