const Collection = require('./collection');

class Products extends Collection {
  constructor(...args) {
    super(...args);
    this.name = 'products';
  }
}

module.exports = Products;