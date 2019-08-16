
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'egg'},
        { name: 'slice of bread'},
        { name: 'ounce of peanut butter'},
        { name: 'ounce of grape jelly'},
        { name: 'hamburger bun'},
        { name: 'hamburger patty'},
        { name: 'slice of cheese'}
      ]);
    });
};
