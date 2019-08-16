const express = require('express');
const recipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

const port = 8000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});