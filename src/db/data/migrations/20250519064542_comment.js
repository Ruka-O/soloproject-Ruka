/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable('comments', (table) => {
		table.integer('store_list_id').unique();
		table.string('comment');
		table.foreign('store_list_id').references('store_list', 'id');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.schema.dropTable('comments');
};
