
exports.up = function(knex) {
  knex.schema.createTable('recipes', table => {
      table.increments();
      table.string('name', 128).notNullable();
  }).createTable('ingredients', table => {
      table.increments();
      table.string('name', 128).notNullable();
  }).createTable('recipe_ingredients', table => {
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
      table.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
      table.float('quantity');
      table.primary(['recipe_id', 'ingredient_id']);
  }).createTable('steps', table => {
      table.increments();
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
      table.integer('step_number').unsigned().notNullable();
      table.string('instructions');
  });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('steps').dropTableIfExists('recipe_ingredients').dropTableIfExists('ingredients').dropTableIfExists('recipes');
};
