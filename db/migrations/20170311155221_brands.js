
exports.up = function(knex, Promise) {
    return knex.schema.createTable('brands', function(table){
        table.increments();
        table.string('name').notNullable().unique();
        table.string('image').notNullable().unique();
        table.string('description').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brands');
};
