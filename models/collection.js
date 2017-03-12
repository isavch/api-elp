class Collection {
  constructor(db) {
    this.db = db;
  }
  all() {
    return this.db(this.name).select();
  }
  create(data) {
    this.validate(data)
      .then(() => this.db(this.name).add(data));
  }
  update(id, data) {
    this.validate(data)
      .then(() =>
          this.db(this.name)
            .where('id', parseInt(id))
            .update(data)
      );
  }
  remove(id) {
    this.db(this.name)
      .where('id', parseInt(showID))
      .del();
  }
}

module.exports = Collection;