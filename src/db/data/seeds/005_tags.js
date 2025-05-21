/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('tags_list').del();
	await knex('tags_list').insert([
		{ store_list_id: 1, tags: "cheesecake, cake, cafe, 岡崎" },
		{ store_list_id: 2, tags: "hamburg, lunch, 福島" },
		{ store_list_id: 3, tags: "TKG, rice, 福島" },
	]);
};
