const Collection = require('./collection');

class Brands extends Collection {
  constructor(...args) {
    super(...args);
    this.name = 'brands';
  }
}

module.exports = Brands;