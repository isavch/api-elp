const Products = require('./products');
const Brands = require('./brands');
const Categories = require('./categories');

module.exports = function(db) {
  return {
    products: new Products(db),
    brands: new Brands(db),
    categories: new Categories(db)
  };
};