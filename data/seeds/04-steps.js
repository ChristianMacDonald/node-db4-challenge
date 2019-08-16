
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: 'Fry egg.' },
        { recipe_id: 2, step_number: 1, instructions: 'Spread peanut butter on one slice of bread.' },
        { recipe_id: 2, step_number: 2, instructions: 'Spread jelly on the other slice of bread.' },
        { recipe_id: 2, step_number: 3, instructions: 'Put the two slices of bread together.' },
        { recipe_id: 3, step_number: 1, instructions: 'Place hamburger on grill.' },
        { recipe_id: 3, step_number: 2, instructions: 'Grill hamburger until sufficiently cooked.' },
        { recipe_id: 3, step_number: 3, instructions: 'Place cheese on hamburger patty.' },
        { recipe_id: 3, step_number: 4, instructions: 'Place hamburger on bun.' }
      ]);
    });
};
