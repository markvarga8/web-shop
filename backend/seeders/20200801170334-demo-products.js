const products = require('./products.json');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('products', products.map((product) => Object.assign(product, { createdAt: new Date(), updatedAt: new Date() }))),

  down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
