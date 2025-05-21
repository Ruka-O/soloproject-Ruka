/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable('prefecture', (table) => {
		table.integer('store_list_id').unique();
		table.string('prefecture').notNullable();
		table.foreign('store_list_id').references('store_list', 'id');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.schema.dropTable('prefecture');
};
