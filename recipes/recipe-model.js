const db = require('../data/dbConfig');

function find() {
    return db('recipes');
}

function findById(id) {
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
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};