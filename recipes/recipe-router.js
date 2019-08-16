const express = require('express');
const recipeModel = require('./recipe-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let recipes = await recipeModel.getRecipes();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: 'The recipes information could not be retrieved.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let recipe = await recipeModel.getRecipes(req.params.id);
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: 'The recipe information could not be retrieved.' });
    }
});

router.get('/:id/instructions', async (req, res) => {
    try {
        let steps = await recipeModel.getInstructions(req.params.id);
        res.status(200).json(steps);
    } catch (err) {
        res.status(500).json({ error: 'The steps information could not be retrieved.' });
    }
});

router.get('/:id/shoppingList', async (req, res) => {
    try {
        let ingredients = await recipeModel.getShoppingList(req.params.id);
        res.status(200).json(ingredients);
    } catch (err) {
        res.status(500).json('The ingredients information could not be retrieved.');
    }
});

module.exports = router;