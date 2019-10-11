
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('instructions').truncate()
    //.then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, instructions: 'make patties 1', recipe_id: 1},
        {step_number: 2, instructions: 'make patties 2', recipe_id: 1},
        {step_number: 3, instructions: 'make patties 3', recipe_id: 1},
        {step_number: 1, instructions: 'jerk chicken 1', recipe_id: 2},
        {step_number: 2, instructions: 'jerk chicken 2', recipe_id: 2},
        {step_number: 3, instructions: 'jerk chicken 3', recipe_id: 2},
        {step_number: 1, instructions: 'ackee & saltfish 1', recipe_id: 3},
        {step_number: 2, instructions: 'ackee & saltfish 2', recipe_id: 3},
        {step_number: 3, instructions: 'ackee & saltfish 3', recipe_id: 3},
        {step_number: 1, instructions: 'jamaican curry goat 1', recipe_id: 4},
        {step_number: 2, instructions: 'jamaican curry goat 2', recipe_id: 4},
        {step_number: 3, instructions: 'jamaican curry goat 3', recipe_id: 4},
        {step_number: 1, instructions: 'make chocolate cookies 1', recipe_id: 5},
        {step_number: 2, instructions: 'make chocolate cookies 2', recipe_id: 5},
        {step_number: 3, instructions: 'make chocolate cookies 3', recipe_id: 5},
        {step_number: 1, instructions: 'make brownies 1', recipe_id: 6},
        {step_number: 2, instructions: 'make brownies 2', recipe_id: 6},
        {step_number: 3, instructions: 'make brownies 3', recipe_id: 6},
      ]);
    //});
};
