const db = require('../data/dbConfig');

function getRecipes(id = 0) {
    if (id) {
        return db('recipes').where({ id }).first();
    } else {
        return db('recipes');
    }
}

function getShoppingList(recipe_id) {
    return db('recipes as r').join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id').join('ingredients as i', 'ri.ingredient_id', 'i.id').select('i.id', 'i.name', 'ri.quantity').where({ recipe_id });
}

function getInstructions(recipe_id) {
    return db('steps').where({ recipe_id });
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};