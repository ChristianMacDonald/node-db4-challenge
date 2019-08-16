
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments();
        table.string('name', 128).notNullable();
    }).createTable('ingredients', table => {
        table.increments();
        table.string('name', 128).notNullable();
    }).createTable('recipe_ingredients', table => {
        table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onUpdate('CASCADE').onDelete('CASCADE');
        table.float('quantity');
        table.primary(['recipe_id', 'ingredient_id']);
    }).createTable('steps', table => {
        table.increments();
        table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('step_number').unsigned().notNullable();
        table.string('instructions');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps').dropTableIfExists('recipe_ingredients').dropTableIfExists('ingredients').dropTableIfExists('recipes');
};
