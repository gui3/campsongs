/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('userId')
        table.string('username')
        table.string('email').notNullable().unique()

        table.string('password').notNullable()
        table.string('salt').notNullable()
        table.integer('iterations').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('users')
};
