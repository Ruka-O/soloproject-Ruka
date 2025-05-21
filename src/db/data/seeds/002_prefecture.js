/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('prefecture').del();
	await knex('prefecture').insert([
		{ store_list_id: 1, prefecture: '愛知県' },
		{ store_list_id: 2, prefecture: '大阪府' },
		{ store_list_id: 3, prefecture: '大阪府' },
	]);
};
