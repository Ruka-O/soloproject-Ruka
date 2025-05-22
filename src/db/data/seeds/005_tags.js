/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('tags_list').del();
	await knex('tags_list').insert([
		{ store_list_id: 1001, tags: "cheesecake, cake, cafe, 岡崎" },
		{ store_list_id: 1002, tags: "hamburg, lunch, 福島" },
		{ store_list_id: 1003, tags: "TKG, rice, 福島" },
	]);
};
