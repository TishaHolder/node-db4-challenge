
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('recipe_ingredients').del()
    //.then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 3},
        {recipe_id: 1, ingredient_id: 6, quantity: 2},
        {recipe_id: 1, ingredient_id: 11, quantity: 1},
        {recipe_id: 2, ingredient_id: 6, quantity: 5},
        {recipe_id: 2, ingredient_id: 8, quantity: 1},
        {recipe_id: 2, ingredient_id: 9, quantity: 1},
        {recipe_id: 3, ingredient_id: 6, quantity: 4},
        {recipe_id: 3, ingredient_id: 7, quantity: 4},
        {recipe_id: 3, ingredient_id: 10, quantity: 1},
        {recipe_id: 4, ingredient_id: 1, quantity: 1},
        {recipe_id: 4, ingredient_id: 3, quantity: 1},
        {recipe_id: 4, ingredient_id: 5, quantity: 3},
        {recipe_id: 5, ingredient_id: 2, quantity: 3},
        {recipe_id: 5, ingredient_id: 3, quantity: 2},
        {recipe_id: 5, ingredient_id: 12, quantity: 2},
        {recipe_id: 6, ingredient_id: 1, quantity: 4},
        {recipe_id: 6, ingredient_id: 2, quantity: 2},
        {recipe_id: 6, ingredient_id: 4, quantity: 3},
      ]);
    //});
};
