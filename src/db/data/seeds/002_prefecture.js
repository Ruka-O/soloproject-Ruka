/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('prefecture').del();
	await knex('prefecture').insert([
		{ store_list_id: 1001, prefecture: '愛知県' },
		{ store_list_id: 1002, prefecture: '大阪府' },
		{ store_list_id: 1003, prefecture: '大阪府' },
	]);
};
