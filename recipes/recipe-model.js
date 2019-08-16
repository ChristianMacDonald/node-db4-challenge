const db = require('../data/dbConfig');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('recipes as r').join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id').join('ingredients as i', 'ri.ingredient_id', 'i.id').select('i.id', 'i.name', 'ri.quantity').where({ recipe_id });
}

function getInstructions(recipe_id) {
    return db('steps as s').join('recipes as r', 's.recipe_id', 'r.id').where({ recipe_id });
}

/* function findById(id) {
    return db('recipes').where({ id }).first();
}

function findSteps(id) {
    return db('steps as s').join('recipes as r', 's.recipe_id', 'r.id').select('s.id', 'r.name', 's.step_number', 's.instructions').where({ scheme_id: id });
}

async function add(recipe) {
    const [id] = await db('recipes').insert(recipe);
    return findById(id);
}

async function update(changes, id) {
    await db('recipes').where({ id }).update(changes);
    return findById(id);
}

async function remove(id) {
    let scheme = await db('recipes').where({ id });
    await db('recipes').where({ id }).delete();
    return scheme;
} */

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};