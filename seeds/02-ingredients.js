
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('ingredients').truncate()
    //.then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cup of flour'}, //1
        {ingredient_name: 'cup of sugar'}, //2
        {ingredient_name: 'butter'}, //3
        {ingredient_name: 'sprinkles'}, //4
        {ingredient_name: 'cup of curry'}, //5
        {ingredient_name: 'quart of olive oil'}, //6
        {ingredient_name: 'pound of ackees'}, //7
        {ingredient_name: 'pound of chicken'}, //8
        {ingredient_name: 'bottle of jerk seasoning'}, //9
        {ingredient_name: 'pound of salt fish'}, //10
        {ingredient_name: 'pound of ground beef'}, //11
        {ingredient_name: 'cup of chocolate chips'}, //12
      ]);
    //});
};
