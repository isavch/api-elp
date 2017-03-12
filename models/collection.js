class Collection {
  constructor(db) {
    this.db = db;
  }
  all() {
    return this.db(this.name).select();
  }
  create() {}
  update() {}
  remove() {}
}

module.exports = Collection;