const Product = require('../models/Product');

module.exports = {
  selectProducts: async (req, res) => {
    const products = await Product.findAll({
    });
    res.json({ products: products });
  }
}
