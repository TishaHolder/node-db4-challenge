
//we always want to create a table with a primary key before the table that references it with a foreign key
exports.up = function(knex) {
    
  return knex.schema
  //RECIPES TABLE
  .createTable('recipes', tbl => {

      //primary key
      tbl.increments();

      //recipe name field
      tbl.string('recipe_name', 255)
      .unique()
      .notNullable();
  })

  //INGREDIENTS TABLE
  .createTable('ingredients', tbl => {
      //primary key
      tbl.increments();

      //ingredient name
      tbl.string('ingredient_name', 255)
      .unique()
      .notNullable();

  })

  //can't create this fk table until pk table exists
  //RECIPE_INGREDIENTS TABLE
  .createTable('recipe_ingredients', tbl => {

      //foreign key - part of composite key
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes') //this table must exist already
      .onUpdate('CASCADE') //updating a pk record updates all associated records
      .onDelete('CASCADE'); //deleteing a pk record deletes all associated records

      //foreign key - part of composite key
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients') //this table must exist already
      .onUpdate('CASCADE') //updating a pk record updates all associated records
      .onDelete('CASCADE'); //deleteing a pk record deletes all associated records

      //quantity
      tbl.float('quantity')
      .unsigned()
      .notNullable();
      
      //the combination of the two keys becomes our primary key
      //will enforce unique combination of keys
      tbl.primary(['recipe_id', 'ingredient_id']); 

  })

  //can't create this fk table until pk table exists
  //INSTRUCTIONS TABLE
  .createTable('instructions', tbl => {
      tbl.increments(); //primary key

      //step number
      tbl.integer('step_number')
      .notNullable();

      //instructions field
      tbl.string('instructions', 255)
      .notNullable();

      //foreign key
      tbl.integer('recipe_id')
      .unsigned()   
      .notNullable()   
      .references('id')
      .inTable('recipes') //this table must exist already
      .onUpdate('CASCADE') //updating a pk record updates all associated records
      .onDelete('CASCADE'); //deleteing a pk record deletes all associated records

  })

};

//We always want to drop a table with a foreign key before dropping the table it references.
exports.down = function(knex) {

    //drop in the opposite order
    return knex.schema
    //drop FK table first then PK table     
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
  
};
