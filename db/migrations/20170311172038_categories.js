
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', function(table){
        table.increments();
        table.string('name').notNullable().unique();
        table.string('description').notNullable();
        table.string('image').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};
