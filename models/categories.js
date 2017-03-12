const Collection = require('./collection');

class Categories extends Collection {
  constructor(...args) {
    super(...args);
    this.name = 'categories';
  }
}

module.exports = Categories;