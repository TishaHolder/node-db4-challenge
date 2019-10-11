
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('recipes').truncate()
    //.then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'jamaican beef patties'}, //1
        {recipe_name: 'jerk chicken'}, //2
        {recipe_name: 'ackee & saltfish'}, //3
        {recipe_name: 'jamaican curry goat'}, //4
        {recipe_name: 'make chocolate cookies'}, //5
        {recipe_name: 'make brownies'}, //6
      ]);
    //});
};
