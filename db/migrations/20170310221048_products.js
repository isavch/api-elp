
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments();
        table.string('serial').notNullable().unique();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('category').notNullable();
        table.string('description').notNullable();
        table.string('series').notNullable();
        table.integer('price').notNullable();
        table.boolean('visible').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
